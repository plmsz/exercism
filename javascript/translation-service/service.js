/// <reference path="./global.d.ts" />

import { NotAvailable } from "./errors";


export class TranslationService {

  constructor(api) {
    this.api = api;
  }

  free(text) {
    return new Promise((resolve, reject) => {
      // .fetch: vai buscar na API e me retornar uma outra Promise que contém uma tradução (não sei quando)
      this.api.fetch(text)
        // .then: registra um callback -> quando tiver um resultado, rode...
        .then(result => resolve(result.translation))
        // .catch: registra outro callback -> caso dê erro, chame...
        .catch(error => reject(error));
    });
  }

  batch(texts) {
    return new Promise((resolve, reject) => {
      if (!texts || texts.length == 0) {
        reject(new BatchIsEmpty());
      }
      const promises = [];

      for (const text of texts) {
        promises.push(this.api.fetch(text));
      }

      return Promise.all(promises)
        .then(result => resolve(result.map(translation => translation.translation)))
        .catch(reason => reject(reason));
    })
  }

  //1º solucao - callback hell
  /* 
  request(text) {
    return new Promise((resolve, reject) => {
      // let ultimoErro; 
      this.api.request(text, error => {
        if (error == null) {
          resolve(undefined);
        }else {
          this.api.request(text, error2 => {
            if (error2 == null) {
              resolve(undefined);
            } else {
              this.api.request(text, error3 => {
                if (error3 == null) {
                  resolve(undefined);
                } else {
                  reject(error3);
                }
              })
            }
          })
        }
      })
    });
  } 
  */

  request(text) {
    const api = this.api;
    function requestAsPromise(txt) {
      return new Promise((resolve, reject) => {
        api.request(txt, (err) =>
          (err ? reject(err) : resolve()));
      }); //se não tem algo no parametro do resolve,da undefined
    }
    return requestAsPromise(text)
      .catch(() => requestAsPromise(text))
      .catch(() => requestAsPromise(text));
  }

  premium(text, minimumQuality) {
    return this.api.fetch(text)
      .then(
        translation => {
          if (translation.quality <= minimumQuality) {
            return translation.translation;
          }
          throw new QualityThresholdNotMet(text);
        },
        reason => {
          if (reason instanceof NotAvailable) {
            this.request(text);
          }
          throw new Error(reason);
        }
      )
      .catch(reason => { throw new Error(reason); });
  }
}


export class QualityThresholdNotMet extends Error {
  /**
   * @param {string} text
   */
  constructor(text) {
    super(
      `
The translation of ${text} does not meet the requested quality threshold.
    `.trim()
    );

    this.text = text;
  }
}

export class BatchIsEmpty extends Error {
  constructor() {
    super(
      `
Requested a batch translation, but there are no texts in the batch.
    `.trim()
    );
  }
}

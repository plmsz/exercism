import { NotAvailable } from "./errors";

export class TranslationService {
  constructor(api) {
    this.api = api;
  }

  async free(text) {
    try {
      const result = await this.api.fetch(text);
      return result.translation;
    } catch (error) {
      throw error;
    }
  }

  async batch(texts) {
    if (!texts || texts.length == 0) {
      throw (new BatchIsEmpty());
    }

    const translations = [];

    for (const text of texts) {
      const result = await this.api.fetch(text);
      translations.push(result.translation);
    }

    return translations;
  }

  async request(text) {
    for (let index = 1; index <= 3; index++) {
      try {
        await this.requestPromise(text);
        return undefined;
      } catch (error) {
        if (index === 3) {
          throw error;
        }
      }

    }
  }

  requestPromise(text) {
    return new Promise((resolve, reject) => {
      this.api.request(text, error => {
        if (error == null) {
          resolve(undefined);
        } else reject(error);
      });
    });
  }

  async premium(text, minimumQuality) {
    try {
      let resultado = await this.api.fetch(text);

      if (resultado.quality >= minimumQuality) {
        return resultado.translation
      } else throw new QualityThresholdNotMet(text);

    } catch (error) {

      if (error instanceof NotAvailable) {
        await this.request(text);
        return (await this.api.fetch(text)).translation;
      } else throw error;
    }
  }

}

export class QualityThresholdNotMet extends Error {
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
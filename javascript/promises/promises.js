export const promisify = (fn) => {
  return function (params) {
    return new Promise((resolve, reject) => {
      fn(params, (err, data) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(data);
        }
      });
    });
  };
};

export const all = async (array) => {
  try {
    const results = [];
    for (const promise of array) {
      results.push(await promise);
    }
    return results;
  } catch (error) {
    throw error;
    // return Promise.reject(error); //também poderia ser
  }
};

export const allSettled = async (array) => {
  const list = [];

  for (const promise of array) {
    try {
      list.push(await promise);
    } catch (error) {
      list.push(error);
    }
  }
  return list;
};

export const race = (array) => {
  return new Promise((resolve, reject) => {
    for (const promise of array) {
      promise.then((result) => resolve(result)).catch((err) => reject(err));
    }
  });
};

export const any = (array) => {
  return new Promise(async (resolve, reject) => {
    const list = [];
    for (const promise of array) {
      promise.then((result) => resolve(result)).catch((err) => list.push(err));
    }
    while (list.length < array.length) {
      await new Promise((resolve) => setTimeout(resolve, 200));
    }
    reject(list);
  });
};

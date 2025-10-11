export interface HttpError {
  err: boolean;
  status: number | string;
  statusText: string;
}

export const helpHttp = () => {
  const customFetch = async ({
    endpoint,
    options = {},
  }: {
    endpoint: string;
    options?: RequestInit;
  }) => {
    const defaultHeader = {
      accept: "application/json",
    };

    const controller = new AbortController();
    options.signal = controller.signal;

    options.method = options.method || "GET";
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;

    if (options.body) {
      options.body = JSON.stringify(options.body);
    } else {
      delete options.body;
    }

    console.log("Ejecutando petición a:", endpoint);
    console.log("Opciones:", options);

    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        controller.abort();
        reject({
          err: true,
          status: "408",
          statusText: "Tiempo de espera agotado",
        });
      }, 10000);

      fetch(endpoint, options)
        .then((res) => {
          clearTimeout(timeoutId);
          if (!res.ok) {
            throw {
              err: true,
              status: res.status || "00",
              statusText: res.statusText || "Ocurrió un error",
            };
          }

          // 👇 Esta línea estaba bien, pero el error era de sintaxis al escribirla
          return res.text().then((text) => (text ? JSON.parse(text) : null));
        })
        .then(resolve)
        .catch(reject);
    });
  };

  // 👇 Aquí retornamos correctamente un objeto con los métodos
  return {
    get: (url: string, options: RequestInit = {}) =>
      customFetch({ endpoint: url, options }),
  };
};

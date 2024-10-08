import { startDownload } from "@utils/core/download";
import { getJsonData } from "@site/index";

(async () => {
  const { limit, downloadData, ...options } = await getJsonData();
  const headers = options.headers;
  delete options.headers;
  for (const data of downloadData) {
    await startDownload({
      limit: !limit || limit <= 0 ? 1 : limit,
      ...data,
      ...options,
      axiosOptions: {
        headers,
      },
    });
  }
})();
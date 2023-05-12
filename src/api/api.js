export const fetchReports = async (page) => {
  const API_KEY = process.env.REACT_APP_API_TOKEN;
  const url = `https://api.iex.cloud/v1/stock/market/list/mostactive?listLimit=100&token=${API_KEY}`;

  try {
    console.log("запрос");
    const response = await fetch(url);
    const data = await response.json();

    // Разделение данных на страницы по 10 элементов
    const limitedData = data.slice(page, page + 10);

    // Добавление логотипа к каждому элементу
    const logoPromises = limitedData.map(async (item) => {
      const logoUrl = `https://cloud.iexapis.com/stable/stock/${item.symbol}/logo?token=${API_KEY}`;
      const logoResponse = await fetch(logoUrl);
      const logoData = await logoResponse.json();
      return { ...item, logo: logoData.url };
    });

    return await Promise.all(logoPromises);
  } catch (e) {
    console.log(e);
  }
};

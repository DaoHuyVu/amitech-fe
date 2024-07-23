import { baseAPI } from "./Authorization";

export const fetchNews = async (categoryName = '') => {

  let query = '?populate=*';

  if (categoryName && categoryName !== "Tất cả") {
    const encodedCategoryName = encodeURIComponent(categoryName);
    query += `&filters[category][$eq]=${encodedCategoryName}`;
  }
  const response = await baseAPI.get(`/news${query}`);
  return response.data.data.map(item => ({
    id: item.id,
    ...item.attributes,
    imgUrl: 'http://localhost:1337' + item.attributes.image.data.attributes.url
  }));
};

// Fetch news detail by newsId
export const fetchNewsDetail = async (id) => {
  const response = await baseAPI.get(`/news/${id}?populate=*`);
  return {
    id: response.data.data.id,
    ...response.data.data.attributes,
    detail: response.data.data.attributes.detail,
    imgUrl: 'http://localhost:1337' + response.data.data.attributes.image.data.attributes.url
  };
};
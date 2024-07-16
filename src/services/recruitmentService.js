import { baseAPI } from "./Authorization";


export const fetchRecruitment = async () => {
  const response = await baseAPI.get('/recruitments?populate=*');
  const data = response.data.data.map(item => ({
    id: item.id,
    ...item.attributes,
    imgUrl: 'http://localhost:1337' + item.attributes.img_u.data.attributes.url
  }));
  const pagination = response.data.meta.pagination;
  return {data, pagination};
};


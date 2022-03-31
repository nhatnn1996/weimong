import axiosClient from './base/axios-client';

export const contentApi = {
  getLessonsByUnit(id) {
    return axiosClient.get(`/units/${id}?populate=lessons`);
  }
};

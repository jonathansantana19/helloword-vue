import http from "../http-common";


class CategoryDataService {

    getAll(){
        console.log('asadsasd')
        return http.get('produto/')
    }

    get(id) {
        return http.get(`/produto/${id}`);
      }
    
    //   create(data) {
    //     return http.post("/tutorials", data);
    //   }
    
      update(id, data) {
        return http.patch(`produto/${id}`, data);
      }
    
    //   delete(id) {
    //     return http.delete(`/tutorials/${id}`);
    //   }
    
    //   deleteAll() {
    //     return http.delete(`/tutorials`);
    //   }
    
    //   findByTitle(title) {
    //     return http.get(`/tutorials?title=${title}`);
    //   }

}
export default new CategoryDataService();

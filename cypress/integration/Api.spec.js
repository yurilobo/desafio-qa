describe('API tests', () => {
    it('Retornar o clima no console usando país e a API_Keys como parametros', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.openweathermap.org/data/2.5/weather?q=Brazil&lang=pt_br&appid=6ac29ecd2763cf699f03a8e3c7704c2b'
        }).then((res)=>{
            expect(res.status).to.equal(200);
            //Clima do Brasil
            let clima=(res.body.weather[0].description)
            console.log('Clima: ',clima)
            let clima2=(res.body.weather[0].main)
            console.log('Parâmetros climáticos: ',clima2)
            //expect(res.body.weather[0].description).to.equal('light rain')     
        })
              
    })
    it('Retornar o clima no console usando latitude, longitude e a API_Keys como parametros', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.openweathermap.org/data/2.5/weather?lat=-33.8667&lon=-0.1257&lang=pt_br&appid=6ac29ecd2763cf699f03a8e3c7704c2b'
        }).then((res)=>{
            expect(res.status).to.equal(200);
            //Clima do Londres
            let clima=('Clima: ',res.body.weather[0].description)
            console.log('Clima: ',clima)
        })     
    })
    it('Retornar o clima no console usando latitude, longitude e a API_Keys como parametros', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.openweathermap.org/data/2.5/weather?q=London&lang=pt_br&&appid=6ac29ecd2763cf699f03a8e3c7704c2b'
        }).then((res)=>{
            expect(res.status).to.equal(200);
            let clima=(res.body.weather[0].description)
            console.log('Clima: ',clima)
            
        })     
    })
})
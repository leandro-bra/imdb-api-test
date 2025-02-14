describe('OMDB - Search by Id or Title', () => {

    context('Busca de títulos por ID ou Titiulo', () => {
        var param = {
            titulo:'12 Angry Men',
            id: 'tt0050083', 
            type: 'movie',
            year: 1,
            plot: 'sort',
            result: 'json',
            key: Cypress.env('apikey')
        }
        const host = Cypress.env('host')

        it('Deve retornar dados do filme na pesquisa por ID', () => {
            cy.request({
                method: 'GET',
                url: host + `?i=${param.id}&type=${param.type}&y=${param.year}&r=${param.result}&apikey=${param.key}`
            }
            ).then((response) => {
                expect(response.body.Title).to.be.eq('12 Angry Men')
                expect(response.body.Year).to.be.eq('1957')
                expect(response.body.Rated).to.be.eq('Approved')
                expect(response.body.Released).not.empty
                expect(response.body.Runtime).not.empty
                expect(response.body.Genre).not.empty
                expect(response.body.Director).not.empty
                expect(response.body.Writer).not.empty
                expect(response.body.Actors).not.empty
                expect(response.body.Plot).not.empty
                expect(response.body.Language).not.empty
                expect(response.body.Country).not.empty
                expect(response.body.Awards).not.empty
                expect(response.body.Poster).not.empty
                expect(response.body.Ratings).not.empty
                expect(response.body.Metascore).not.empty
                expect(response.body.imdbRating).not.empty
                expect(response.body.imdbVotes).not.empty
                expect(response.body.imdbID).to.be.eq(param.id)
                expect(response.body.Type).to.eq(param.type)
                expect(response.body.DVD).not.empty
                expect(response.body.BoxOffice).not.empty
                expect(response.body.Production).not.empty
                expect(response.body.Website).not.empty
                expect(response.body.Response).to.eq('True')
            })
        })

        it('Deve retornar filme na pesquisa por título', ()=>{
            cy.request({
                method: 'GET',
                url: host + `?t=${param.titulo}&type=${param.type}&r=${param.result}&apikey=${param.key}`
            }).then((response)=>{
                expect(response.body.Title).to.be.eq('12 Angry Men')
                expect(response.body.Year).to.be.eq('1957')
                expect(response.body.Rated).to.be.eq('Approved')
                expect(response.body.Released).not.empty
                expect(response.body.Runtime).not.empty
                expect(response.body.Genre).not.empty
                expect(response.body.Director).not.empty
                expect(response.body.Writer).not.empty
                expect(response.body.Actors).not.empty
                expect(response.body.Plot).not.empty
                expect(response.body.Language).not.empty
                expect(response.body.Country).not.empty
                expect(response.body.Awards).not.empty
                expect(response.body.Poster).not.empty
                expect(response.body.Ratings).not.empty
                expect(response.body.Metascore).not.empty
                expect(response.body.imdbRating).not.empty
                expect(response.body.imdbVotes).not.empty
                expect(response.body.imdbID).to.be.eq(param.id)
                expect(response.body.Type).to.eq(param.type)
                expect(response.body.DVD).not.empty
                expect(response.body.BoxOffice).not.empty
                expect(response.body.Production).not.empty
                expect(response.body.Website).not.empty
                expect(response.body.Response).to.eq('True')
            })
        })

    })

})
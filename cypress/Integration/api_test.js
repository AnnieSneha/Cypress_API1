describe('JSON PLACEHOLDER', () => {

    const baseurl="https://jsonplaceholder.typicode.com/"

    it('Fetch List Of Books', () => {

        cy.request({

            method:'GET',

            url:baseurl+'/posts',

            headers:{

                'Content-Type':'application/json'
            },
            timeout:120000

        }).then((response)=>{

            expect(response.status).to.eq(200)

            cy.log(JSON.stringify(response.body))

        })
        
    });
    it('Create A New Post', () => {

        cy.request({

            method:'POST',

            url:baseurl+'/posts',

            body:{
                "title":"New Post",
                "body":"This is the body of the new post",
                "userId":1
            },

            headers:{

                'Content-Type':'application/json'

            },
            timeout:120000

        }).then((response)=>{

            expect(response.status).to.eq(201)

            cy.log(JSON.stringify(response.body))
            
        })
        
    });
    it('Update An Existing Post', () => {

        cy.request({

            method:'PUT',

            url:baseurl+'/posts/1',

            body:{
                "title":"Updated Post",
                "body":"This is the updated body of the post",
                "userId":1
            },

            headers:{

                'Content-Type':'application/json'

            },
            timeout:120000

        }).then((response)=>{

            expect(response.status).to.eq(200)

            cy.log(JSON.stringify(response.body))
            
        })
        
    });
    it('Delete An Existing Post', () => {

        cy.request({

            method:'DELETE',

            url:baseurl+'/posts/1',

            headers:{

                'Content-Type':'application/json'

            },
            timeout:120000

        }).then((response)=>{

            expect(response.status).to.eq(200)

            cy.log(JSON.stringify(response.body))
            
        })
        
    });

});
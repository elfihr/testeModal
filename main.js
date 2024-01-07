const close = document.querySelector('#check')
        const btnOpenModal = document.querySelector('#btnOpenModal')
        const modal = document.querySelector('#modalTest')

        btnOpenModal.addEventListener('click', ()=> {
            modal.showModal()
        })

        close.addEventListener('click', () => {
            console.log('oi')
            modal.close()
            
        })
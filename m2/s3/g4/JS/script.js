let card = document.getElementsByClassName('card')

fetch('https://api.pexels.com/v1/search?query=Nature', {
    headers: {
      Authorization: 'LJPG30hSUDtKBI5JESCA24GdRtKJ4X7wqPuCSY1hBPzFxDRVPT11IoWI'
    }})

    .then((res) => {
        if (res.ok) {
            return res.json()
        } else {
            throw new error ('Errore')
        }
    })

    .then ((photos) => {

        console.log(photos)
        photos.photos.forEach((element , i) => {
            let load = document.querySelector('load')
            load.addEventListener('click' , () => {

            card[i].firstElementChild.remove();
            let newImg = document.createElement('img');
            newImg.classList.add('img-fluid')
            newImg.height = '225';
            newImg.src = element.src.nature;
            card[i].prepend(newImg);
            
        })
        });
    })

    fetch('https://api.pexels.com/v1/search?query=Sky', {
    headers: {
      Authorization: 'LJPG30hSUDtKBI5JESCA24GdRtKJ4X7wqPuCSY1hBPzFxDRVPT11IoWI'
    }})

    .then((res) => {
        if (res.ok) {
            return res.json()
        } else {
            throw new error ('Errore')
        }
    })

    .then ((photos) => {

        console.log(photos)
        photos.photos.forEach((element , i) => {
            let load2 = document.querySelector('load2')
            load2.addEventListener('click' , () => {

            card[i].firstElementChild.remove();
            let newImg = document.createElement('img');
            newImg.classList.add('img-fluid')
            newImg.height = '225';
            newImg.src = element.src.nature;
            card[i].prepend(newImg);
            
        })
        });
    })

    .catch((err) => {
        console.log(err)
    })
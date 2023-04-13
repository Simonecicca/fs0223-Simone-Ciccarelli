/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

       const changeTitle = function () {
      let p = document.querySelector("h1");
      p.innerHTML = "Nuovo Titolo";
  
    }
  
      changeTitle()
  
      /* ESERCIZIO 2
         Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
      */
  
      const addClassToTitle = function () {
        var element = document.querySelector("h1")
        element.classList.add("myHeading")
  
      }
  
      addClassToTitle()
  
      /* ESERCIZIO 3
         Scrivi una funzione per che cambi il testo dei p figli di un div
        */
  
      const changePcontent = function () {
        for (const element of document.querySelectorAll('div.p')) {
            element.textContent = "Nuovo Titolo"
        }
  
    }

    changePcontent()
  
      /* ESERCIZIO 4
         Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
        */
  
      const changeUrls = function () {
        document.querySelector("body a").href = "https://www.google.com"
         
  
      }

      changeUrls()

  
      /* ESERCIZIO 5
         Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
      */
  
      const addToTheSecond = function () {
        let ul = document.querySelector("#secondList")
        let li = document.createElement('li')
        ul.appendChild(li).innerHTML = '<li>4th</li>'
  
  
      }
      addToTheSecond()
  
      /* ESERCIZIO 6
         Scrivi una funzione che aggiunga un secondo paragrafo al primo div
      */
  
      const addParagraph = function () {
       let p =
      }
  
      /* ESERCIZIO 7
         Scrivi una funzione che faccia scomparire la prima lista non ordinata
      */
  
      const hideFirstUl = function () {
        document.querySelector("#firstList").getElementsByClassName.display = 'nome'
      }

      hideFirstUl()
  
      /* ESERCIZIO 8 
         Scrivi una funzione che renda verde il background di ogni lista non ordinata
        */
  
      const paintItGreen = function () {
        for (const element of document.querySelectorAll('ul')) {
            element.style.backgroundColor = 'green'
        }
  
      }

      paintItGreen()
  
      /* ESERCIZIO 9
         Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
        */
  
      const makeItClickable = function () {
        let h1 = document.querySelector('h1')
        
      }
  
        makeItClickable()

      /* ESERCIZIO 10
         Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
        */
  
      const revealFooterLink = function () {
  
  
      }
  
      /* ESERCIZIO 11
         Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
         La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
      */
  
      const generateTable = function () {
  
  
      }
  
      /* ESERCIZIO 12
         Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
      */
  
      const addRow = function () {
  
  
      }
  
      /* ESERCIZIO 14
        Crea una funzione che nasconda le immagini della tabella quando eseguita
      */
  
      const hideAllImages = function () {
  
  
      }
  
      /* EXTRA ESERCIZIO 15
        Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
      */
  
      const changeColorWithRandom = function () {
  
  
      }
  
      /* EXTRA ESERCIZIO 16
        Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
      */
  
      const deleteVowels = function () {
  
  
      }
  
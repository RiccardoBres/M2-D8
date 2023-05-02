const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
]

//Prima funzione. 

function jobSearcher(location, position) { // Attraverso questa funzione è possibile cercare all'interno dell'array fornito i valori desiderati.

  let result = []; // array d'appoggio che conterrà il risultato della ricerca.
  for(let i = 0; i < jobs.length; i++) { 
   
    let loclc = jobs[i].location.toLowerCase(); //in questa fase stiamo impostando 0 sensibilità a livello di caratteri minuscoli/maiuscoli sfruttando il metodo "toLowerCase"
    let titlelc = jobs[i].title.toLowerCase();
    location = location.toLowerCase(); 
    position = position.toLowerCase();

    if (titlelc.includes(position) && loclc.includes(location)) { //attraverso il metodo includes stiamo chiedendo di verificare se entrambi gli elementi indicati sono presenti nell'array e, nel caso in cui lo fossero, di "spingerli" all'interno dell'array d'appoggio creato in  precedenza.
      result.push({
        title: jobs[i].title,
        location: jobs[i].location
      })
    }
  }
  let count = result.length; //questa variabile conterrà il numero di array che soddisfano le condizioni di ricerca. 
  return {result, count}; 
}

//Seconda funzione

  let title = document.getElementById("searchPosition"); //in questa fase del codice stiamo dichiarando le variabili che "targetteranno" i vari elementi input all'interno dellhtml.
  let luogo = document.getElementById("searchLocation");
  let end = document.getElementById("output")
 
function finalOutput() { 
  let search = jobSearcher(title.value, luogo.value); // creiamo una variabile search che conterrà la precedente funzione, "lanciandola" addosso le variabili utilizzate per targettare gli elementi nell'html
  for (let i = 0; i<search.count; i++) { //questo loop permette di avviare un "ispezione" all'interno della variabile search(che contiene il risultato della precedente funzione).
    let list = document.createElement("li"); 
    list.innerHTML = search.result[i].title + "\n" + search.result[i].location; 
    end.appendChild(list); 
    end.style.color = "#695e5e";
  }
  let conteggio = document.createElement("span"); 
  conteggio.innerText = "Totale " + search.count; 
  end.appendChild(conteggio) // richiamiamo la variabile contenente l'elemento DOM "output" e inseriamo lo span attraverso il metodo appenChild.
  
} 

let ricerca = document.getElementById("button"); 
ricerca.addEventListener ("click", finalOutput); // in questo passaggio, attraverso l'addEventListener method appoggiato alla variabile ricerca, permettiamo di scatenare la funzione finalOutput allo scatenarsi dell'evento "click". 

//Terza funzione

function cleaner() {  // questa funzione permette di cancellare i risultati trovati schiacciando il tasto "clear"
 let element= $("#output") // la variabile element, attraverso la funzione di libreria jQuery di cui script è stato inserito nell'head dell'html, mi permette di semplificare la selezione degli elementi nel DOM" e di utilizzare il metodo empty.
  element.empty();
  $('.input').val("");
 }
 
let clean = document.getElementById("reset")
clean.addEventListener("click", cleaner); 



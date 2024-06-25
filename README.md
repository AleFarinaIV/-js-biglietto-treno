# Esercizio

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

# Consigli

Ricordatevi di fare il file README.md in cui scomponete il problema in sotto problemi
Numero minimo di push: 6

# Scomposizione del problema

Situazione: calcolare i prezzi dei biglietti del treno sulla base di kilometri e età dei passeggeri

Dichiarare una variabile
    Assegnare a questa variabile il valore recuperato dalla prompt specifica

Dichiarare una seconda variabile
    Asseganre a questa variabile il valore recuperato dalla prompt specifica

Calcolare il prezzo totale seguendo delle regole
    - Il prezzo varierà in base ai kilometri effettuati
    - Il prezzo varierà in base all'età del passeggero
        IF età < 18 applicare sconto del 20% sul prezzo del biglietto
        ELSE If età > 65 applicare sconto del 40%
        ELSE non applicare nessuno sconto

L'output sarà il prezzo finale del biglietto in forma decimale, con massimo due decimali ad inidicare i centesimi.
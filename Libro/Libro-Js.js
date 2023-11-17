//--- Definimos las clases ----// 
class Book  {
    

    constructor(title, autor, gender, alreadyread) {
        this.title = title;
        this.autor = autor;
        this.gender = gender;
        this.alreadyread = alreadyread;
    }

    marcarLeido(){
        this.alreadyread = true
        console.log("has already read")
    }

    marcarNoLeido(){
        this.alreadyread = false
        console.log("have not read yet")
    }
   
    information() { 
        const alreadyreadstatus = this.alreadyread ? "Yes" : "No";
        console.log ( `Title: ${this.title}, Autor: ${this.autor}, Gender: ${this.gender}, it was read: ${alreadyreadstatus}`)
    }
 }
    const book1 = new Book("12 rules for life ", "Jordan Peterson", "Self-help");
    const book2 = new Book("Atomic Habits", "James Clear", "Self-help");

    book1.marcarLeido();
    book1.information();
    book2.information();
    
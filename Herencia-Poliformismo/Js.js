class FigurasGeometricas {
    constructor() {
        this.tipo = "Figura Geométrica";
    }

    area() {
        
    }

    perimetro() {
        
    }
}

class Circulo extends FigurasGeometricas {
    constructor(radio) {
        super();
        this.tipo = "Círculo";
        this.radio = radio;
    }

    area() {
        return 3.14 * this.radio ** 2;
    }

    perimetro() {
        return 2 * 3.14 * this.radio;
    }
}

class Cuadrado extends FigurasGeometricas {
    constructor(lado) {
        super();
        this.tipo = "Cuadrado";
        this.lado = lado;
    }

    area() {
        return this.lado ** 2;
    }

    perimetro() {
        return 4 * this.lado;
    }
}

class Rectangulo extends FigurasGeometricas {
    constructor(base, altura) {
        super();
        this.tipo = "Rectángulo";
        this.base = base;
        this.altura = altura;
    }

    area() {
        return this.base * this.altura;
    }

    perimetro() {
        return 2 * (this.base + this.altura);
    }
}

const circulo = new Circulo(4);
const cuadrado = new Cuadrado(6);
const rectangulo = new Rectangulo(6, 16);

console.log(`${circulo.tipo}`);
console.log(`Área: ${circulo.area()}`);
console.log(`Perímetro: ${circulo.perimetro()}`);

console.log(`${cuadrado.tipo}`);
console.log(`Área: ${cuadrado.area()}`);
console.log(`Perímetro: ${cuadrado.perimetro()}`);

console.log(`${rectangulo.tipo}`);
console.log(`Área: ${rectangulo.area()}`);
console.log(`Perímetro: ${rectangulo.perimetro()}`);
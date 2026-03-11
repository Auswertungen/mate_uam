const preguntas = [
  // ÁLGEBRA Y ARITMÉTICA
  {
    pregunta: "¿Cuál es el resultado de simplificar: 2x - [3x - (x - 1)]?",
    opciones: ["-1", "1", "2x - 1", "x + 1"],
    respuestaCorrecta: 0,
    retroalimentacion: "Al eliminar paréntesis: 2x - [3x - x + 1] = 2x - [2x + 1] = 2x - 2x - 1 = -1."
  },
  {
    pregunta: "Resuelve para x: 3(x - 2) = 2(x + 4)",
    opciones: ["10", "14", "2", "12"],
    respuestaCorrecta: 1,
    retroalimentacion: "3x - 6 = 2x + 8. Restando 2x y sumando 6 en ambos lados: x = 14."
  },
  {
    pregunta: "¿Cuál es el valor de x en el sistema: x + y = 5; x - y = 1?",
    opciones: ["2", "3", "4", "2.5"],
    respuestaCorrecta: 1,
    retroalimentacion: "Sumando ambas ecuaciones: 2x = 6, por lo tanto x = 3."
  },
  {
    pregunta: "Factoriza la expresión: x² - 9",
    opciones: ["(x-3)(x-3)", "(x+3)(x+3)", "(x-3)(x+3)", "(x-9)(x+1)"],
    respuestaCorrecta: 2,
    retroalimentacion: "Es una diferencia de cuadrados: a² - b² = (a - b)(a + b)."
  },
  {
    pregunta: "Simplifica la expresión: (a³b² / ab⁵)",
    opciones: ["a² / b³", "a⁴b⁷", "a²b³", "a/b"],
    respuestaCorrecta: 0,
    retroalimentacion: "Se restan los exponentes: a^(3-1) = a² y b^(2-5) = b⁻³. Resultado: a²/b³."
  },
  {
    pregunta: "¿Cuál es la solución de x² - 5x + 6 = 0?",
    opciones: ["x=1, x=6", "x=-2, x=-3", "x=2, x=3", "x=5, x=1"],
    respuestaCorrecta: 2,
    retroalimentacion: "Factorizando: (x - 2)(x - 3) = 0. Las raíces son x = 2 y x = 3."
  },
  {
    pregunta: "Calcula el valor de: (2² * 2³)²",
    opciones: ["32", "64", "512", "1024"],
    respuestaCorrecta: 3,
    retroalimentacion: "(2⁵)² = 2¹⁰ = 1024."
  },
  {
    pregunta: "Si f(x) = 2x² - 3, ¿cuánto vale f(-2)?",
    opciones: ["11", "5", "-11", "1"],
    respuestaCorrecta: 1,
    retroalimentacion: "f(-2) = 2(-2)² - 3 = 2(4) - 3 = 8 - 3 = 5."
  },
  {
    pregunta: "¿Cuál es el desarrollo de (x + 2)³?",
    opciones: ["x³ + 8", "x³ + 4x² + 4x + 8", "x³ + 6x² + 12x + 8", "x³ + 2x² + 4x + 8"],
    respuestaCorrecta: 2,
    retroalimentacion: "Cubo del primero + 3(1ro)²(2do) + 3(1ro)(2do)² + cubo del segundo."
  },
  {
    pregunta: "Simplifica: √(50x²)",
    opciones: ["25x", "5x√2", "10x", "2x√5"],
    respuestaCorrecta: 1,
    retroalimentacion: "√(25 * 2 * x²) = 5x√2."
  },

  // TRIGONOMETRÍA
  {
    pregunta: "¿A cuántos radianes equivalen 180°?",
    opciones: ["π/2 rad", "2π rad", "π rad", "3π/2 rad"],
    respuestaCorrecta: 2,
    retroalimentacion: "Por definición, un semicírculo (180°) corresponde a π radianes."
  },
  {
    pregunta: "En un triángulo rectángulo, si el cateto opuesto es 3 y el adyacente es 4, ¿cuánto vale el seno?",
    opciones: ["3/4", "4/5", "3/5", "5/3"],
    respuestaCorrecta: 2,
    retroalimentacion: "Hipotenusa = √(3²+4²) = 5. Seno = Opuesto/Hipotenusa = 3/5."
  },
  {
    pregunta: "¿Cuál es el valor de cos(0°)?",
    opciones: ["0", "1", "-1", "Indefinido"],
    respuestaCorrecta: 1,
    retroalimentacion: "En el círculo unitario, a 0° la coordenada x es 1."
  },
  {
    pregunta: "Identifica la identidad pitagórica correcta:",
    opciones: ["sen²θ - cos²θ = 1", "tan²θ + 1 = sec²θ", "senθ + cosθ = 1", "1 - sen²θ = tan²θ"],
    respuestaCorrecta: 1,
    retroalimentacion: "Dividiendo sen²θ + cos²θ = 1 entre cos²θ se obtiene tan²θ + 1 = sec²θ."
  },
  {
    pregunta: "¿Cuál es el periodo de la función y = cos(2x)?",
    opciones: ["2π", "π", "π/2", "4π"],
    respuestaCorrecta: 1,
    retroalimentacion: "El periodo T = 2π/k. Aquí k=2, por lo que T = 2π/2 = π."
  },
  {
    pregunta: "Si tanθ = 1 y θ está en el I cuadrante, ¿cuánto vale θ?",
    opciones: ["30°", "45°", "60°", "90°"],
    respuestaCorrecta: 1,
    retroalimentacion: "La tangente es 1 cuando el cateto opuesto y adyacente son iguales (45°)."
  },
  {
    pregunta: "Calcula el valor exacto de sen(60°):",
    opciones: ["1/2", "√2/2", "√3/2", "1"],
    respuestaCorrecta: 2,
    retroalimentacion: "En un triángulo notable 30°-60°, el seno de 60° es √3/2."
  },
  {
    pregunta: "¿A qué es igual sec(θ)?",
    opciones: ["1/senθ", "1/cosθ", "1/tanθ", "cosθ/senθ"],
    respuestaCorrecta: 1,
    retroalimentacion: "La secante es la función recíproca del coseno."
  },
  {
    pregunta: "En un triángulo no rectángulo, se conocen dos lados y el ángulo entre ellos. ¿Qué ley se usa?",
    opciones: ["Ley de Senos", "Teorema de Pitágoras", "Ley de Cosenos", "Ley de Tangentes"],
    respuestaCorrecta: 2,
    retroalimentacion: "La Ley de Cosenos se aplica en casos Lado-Ángulo-Lado (LAL)."
  },
  {
    pregunta: "¿Cuál es el valor de sen(π/2)?",
    opciones: ["0", "1", "-1", "0.5"],
    respuestaCorrecta: 1,
    retroalimentacion: "π/2 rad = 90°. El seno de 90° es 1."
  },

  // GEOMETRÍA ANALÍTICA
  {
    pregunta: "¿Cuál es la pendiente de la recta y = -3x + 5?",
    opciones: ["5", "3", "-3", "1/3"],
    respuestaCorrecta: 2,
    retroalimentacion: "En la forma y = mx + b, m es la pendiente. Aquí m = -3."
  },
  {
    pregunta: "Distancia entre los puntos (0,0) y (3,4):",
    opciones: ["7", "5", "√7", "25"],
    respuestaCorrecta: 1,
    retroalimentacion: "d = √((3-0)² + (4-0)²) = √(9+16) = 5."
  },
  {
    pregunta: "¿Qué tipo de cónica representa x² + y² = 16?",
    opciones: ["Parábola", "Elipse", "Circunferencia", "Hipérbola"],
    respuestaCorrecta: 2,
    retroalimentacion: "Es la ecuación ordinaria de una circunferencia con centro en el origen y radio 4."
  },
  {
    pregunta: "Punto medio del segmento con extremos (2,4) y (6,8):",
    opciones: ["(4,4)", "(8,12)", "(4,6)", "(2,2)"],
    respuestaCorrecta: 2,
    retroalimentacion: "Pm = ((2+6)/2, (4+8)/2) = (4, 6)."
  },
  {
    pregunta: "¿Cuál es el centro de la elipse (x-1)²/9 + (y+2)²/16 = 1?",
    opciones: ["(1, 2)", "(-1, 2)", "(1, -2)", "(-1, -2)"],
    respuestaCorrecta: 2,
    retroalimentacion: "El centro está en (h, k). Cambiando signos: h=1, k=-2."
  },
  {
    pregunta: "Ecuación de la recta con pendiente 2 que pasa por (0,3):",
    opciones: ["y = 2x + 3", "y = 3x + 2", "y = 2x - 3", "x = 2y + 3"],
    respuestaCorrecta: 0,
    retroalimentacion: "Usando punto-pendiente o ordenada al origen: y = 2x + 3."
  },
  {
    pregunta: "Si el discriminante B² - 4AC > 0 en una ecuación de segundo grado, las raíces son:",
    opciones: ["Iguales", "Imaginarias", "Reales y diferentes", "No existen"],
    respuestaCorrecta: 2,
    retroalimentacion: "Un discriminante positivo indica dos soluciones reales distintas."
  },
  {
    pregunta: "¿Hacia dónde abre la parábola y = -x²?",
    opciones: ["Derecha", "Izquierda", "Arriba", "Abajo"],
    respuestaCorrecta: 3,
    retroalimentacion: "El signo negativo en el término cuadrático x² indica que abre hacia el eje y negativo."
  },
  {
    pregunta: "Condición para que dos rectas sean perpendiculares:",
    opciones: ["m1 = m2", "m1 * m2 = -1", "m1 * m2 = 1", "m1 = -m2"],
    respuestaCorrecta: 1,
    retroalimentacion: "El producto de sus pendientes debe ser -1 (recíprocas y opuestas)."
  },
  {
    pregunta: "Radio de la circunferencia x² + y² - 4 = 0:",
    opciones: ["4", "16", "2", "1"],
    respuestaCorrecta: 2,
    retroalimentacion: "x² + y² = 4. r² = 4, entonces r = 2."
  },

  // LÍMITES Y CÁLCULO DIFERENCIAL
  {
    pregunta: "Calcula el límite: lim (x→2) [x² - 4] / [x - 2]",
    opciones: ["0", "2", "4", "Indefinido"],
    respuestaCorrecta: 2,
    retroalimentacion: "Factorizando: (x-2)(x+2)/(x-2) = x+2. Evaluando x=2: 2+2=4."
  },
  {
    pregunta: "¿Cuál es la derivada de f(x) = x³?",
    opciones: ["3x", "x²", "3x²", "2x³"],
    respuestaCorrecta: 2,
    retroalimentacion: "Regla de la potencia: d/dx(xⁿ) = nxⁿ⁻¹. Aquí 3x²."
  },
  {
    pregunta: "Derivada de f(x) = sen(x):",
    opciones: ["cos(x)", "-cos(x)", "tan(x)", "sec(x)"],
    respuestaCorrecta: 0,
    retroalimentacion: "La derivada del seno es el coseno positivo."
  },
  {
    pregunta: "¿Cuál es la derivada de una constante?",
    opciones: ["1", "La misma constante", "0", "x"],
    respuestaCorrecta: 2,
    retroalimentacion: "La tasa de cambio de un valor que no varía es siempre cero."
  },
  {
    pregunta: "Derivada de f(x) = eˣ:",
    opciones: ["xeˣ", "eˣ", "ln(x)", "1/x"],
    respuestaCorrecta: 1,
    retroalimentacion: "La función exponencial eˣ es su propia derivada."
  },
  {
    pregunta: "Calcula la derivada de f(x) = 5x⁴ - 2x:",
    opciones: ["20x³ - 2", "5x³ - 2", "20x⁴", "20x³"],
    respuestaCorrecta: 0,
    retroalimentacion: "Aplicando regla de potencia a cada término: 5(4)x³ - 2(1) = 20x³ - 2."
  },
  {
    pregunta: "¿Qué representa la primera derivada de una función en un punto?",
    opciones: ["El área bajo la curva", "La pendiente de la recta tangente", "La concavidad", "El valor máximo"],
    respuestaCorrecta: 1,
    retroalimentacion: "Conceptualmente, la derivada es la pendiente de la recta tangente en un punto dado."
  },
  {
    pregunta: "Si la segunda derivada es positiva en un punto crítico, hay un:",
    opciones: ["Máximo", "Mínimo", "Punto de inflexión", "Cero"],
    respuestaCorrecta: 1,
    retroalimentacion: "Criterio de la 2da derivada: f''(x) > 0 implica que la curva es cóncava hacia arriba (mínimo)."
  },
  {
    pregunta: "Derivada de f(x) = ln(x):",
    opciones: ["eˣ", "1/x", "x", "1"],
    respuestaCorrecta: 1,
    retroalimentacion: "La derivada del logaritmo natural de x es su recíproco 1/x."
  },
  {
    pregunta: "Calcula lim (x→∞) [1 / x]:",
    opciones: ["∞", "1", "0", "-∞"],
    respuestaCorrecta: 2,
    retroalimentacion: "A medida que el denominador crece infinitamente, el valor de la fracción tiende a cero."
  },

  // CÁLCULO INTEGRAL
  {
    pregunta: "¿Cuál es la integral de ∫ x dx?",
    opciones: ["x² + C", "(x²/2) + C", "1 + C", "x + C"],
    respuestaCorrecta: 1,
    retroalimentacion: "∫ xⁿ dx = [xⁿ⁺¹ / (n+1)] + C. Para n=1: x²/2."
  },
  {
    pregunta: "Calcula ∫ sen(x) dx:",
    opciones: ["cos(x) + C", "-cos(x) + C", "sen(x) + C", "tan(x) + C"],
    respuestaCorrecta: 1,
    retroalimentacion: "La integral del seno es el coseno negativo."
  },
  {
    pregunta: "¿Cuál es el valor de ∫₁² 2x dx?",
    opciones: ["1", "2", "3", "4"],
    respuestaCorrecta: 2,
    retroalimentacion: "La primitiva es x². Evaluando: 2² - 1² = 4 - 1 = 3."
  },
  {
    pregunta: "La integral definida representa:",
    opciones: ["La pendiente", "El área bajo la curva", "La velocidad", "La concavidad"],
    respuestaCorrecta: 1,
    retroalimentacion: "Geométricamente, la integral definida entre a y b es el área neta bajo la función."
  },
  {
    pregunta: "∫ (1/x) dx es igual a:",
    opciones: ["ln|x| + C", "eˣ + C", "x⁻² + C", "log(x) + C"],
    respuestaCorrecta: 0,
    retroalimentacion: "Es una integral inmediata: la función cuya derivada es 1/x es ln|x|."
  },
  {
    pregunta: "Calcula ∫ eˣ dx:",
    opciones: ["eˣ + C", "xeˣ + C", "eˣ⁺¹ + C", "ln(x) + C"],
    respuestaCorrecta: 0,
    retroalimentacion: "La integral de eˣ es ella misma más la constante de integración."
  },
  {
    pregunta: "∫ 5 dx es igual a:",
    opciones: ["0", "5", "5x + C", "x⁵ + C"],
    respuestaCorrecta: 2,
    retroalimentacion: "La integral de una constante k es kx + C."
  },
  {
    pregunta: "Integral de ∫ cos(x) dx:",
    opciones: ["sen(x) + C", "-sen(x) + C", "cos(x) + C", "tan(x) + C"],
    respuestaCorrecta: 0,
    retroalimentacion: "La derivada del seno es el coseno, por tanto su integral es sen(x)."
  },
  {
    pregunta: "Resuelve ∫ x² dx:",
    opciones: ["2x + C", "x³ + C", "(x³/3) + C", "3x² + C"],
    respuestaCorrecta: 2,
    retroalimentacion: "Sumamos 1 al exponente (2+1=3) y dividimos entre ese número."
  },
  {
    pregunta: "¿Qué es la 'C' en una integral indefinida?",
    opciones: ["Coeficiente", "Curva", "Constante de integración", "Cero"],
    respuestaCorrecta: 2,
    retroalimentacion: "Representa cualquier valor constante que se pierde al derivar."
  },

  // RAZONAMIENTO MATEMÁTICO Y GEOMETRÍA
  {
    pregunta: "¿Cuánto suman los ángulos internos de un triángulo?",
    opciones: ["90°", "180°", "270°", "360°"],
    respuestaCorrecta: 1,
    retroalimentacion: "En geometría euclidiana, la suma siempre es exactamente 180°."
  },
  {
    pregunta: "Área de un círculo de radio 3:",
    opciones: ["3π", "6π", "9π", "12π"],
    respuestaCorrecta: 2,
    retroalimentacion: "Área = πr². Como r=3, r²=9. Resultado: 9π."
  },
  {
    pregunta: "Un ángulo de 90° se llama:",
    opciones: ["Agudo", "Obtuso", "Recto", "Llano"],
    respuestaCorrecta: 2,
    retroalimentacion: "El ángulo recto mide exactamente 90°."
  },
  {
    pregunta: "¿Cuántos lados tiene un decágono?",
    opciones: ["8", "10", "12", "15"],
    respuestaCorrecta: 1,
    retroalimentacion: "Deca significa diez."
  },
  {
    pregunta: "Volumen de un cubo de lado 2:",
    opciones: ["4", "6", "8", "12"],
    respuestaCorrecta: 2,
    retroalimentacion: "Volumen = l³ = 2 * 2 * 2 = 8."
  },
  {
    pregunta: "Si un evento es seguro, su probabilidad es:",
    opciones: ["0", "0.5", "1", "100"],
    respuestaCorrecta: 2,
    retroalimentacion: "La probabilidad escala de 0 (imposible) a 1 (seguro)."
  },
  {
    pregunta: "¿Cuál es la media de 4, 6, 8 y 10?",
    opciones: ["6", "7", "8", "28"],
    respuestaCorrecta: 1,
    retroalimentacion: "(4+6+8+10)/4 = 28/4 = 7."
  },
  {
    pregunta: "En la serie 2, 4, 8, 16... ¿cuál es el siguiente término?",
    opciones: ["20", "24", "32", "64"],
    respuestaCorrecta: 2,
    retroalimentacion: "Es una progresión geométrica con razón 2. 16 * 2 = 32."
  },
  {
    pregunta: "¿Qué porcentaje es 20 de 80?",
    opciones: ["20%", "25%", "30%", "40%"],
    respuestaCorrecta: 1,
    retroalimentacion: "(20/80) * 100 = 1/4 * 100 = 25%."
  },
  {
    pregunta: "Resuelve: 1/2 + 1/4",
    opciones: ["2/6", "1/6", "3/4", "1/8"],
    respuestaCorrecta: 2,
    retroalimentacion: "2/4 + 1/4 = 3/4."
  },

  // REPASO ÁREA 1 (TEMAS FRECUENTES)
  {
    pregunta: "Ecuación de la recta que pasa por el origen con pendiente 1:",
    opciones: ["y = x", "y = 1", "x = 1", "y = 0"],
    respuestaCorrecta: 0,
    retroalimentacion: "Si pasa por (0,0), b=0. Si m=1, entonces y = 1x + 0."
  },
  {
    pregunta: "¿Cuál es el valor de log₁₀(100)?",
    opciones: ["1", "2", "10", "100"],
    respuestaCorrecta: 1,
    retroalimentacion: "10 elevado a qué potencia da 100? 10² = 100."
  },
  {
    pregunta: "Dominio de f(x) = √(x - 1):",
    opciones: ["x > 0", "x ≥ 1", "x ≥ 0", "Todo R"],
    respuestaCorrecta: 1,
    retroalimentacion: "El argumento de una raíz cuadrada debe ser mayor o igual a cero: x - 1 ≥ 0."
  },
  {
    pregunta: "Rango de f(x) = sen(x):",
    opciones: ["(-∞, ∞)", "[0, 1]", "[-1, 1]", "[-π, π]"],
    respuestaCorrecta: 2,
    retroalimentacion: "El seno oscila entre sus valores extremos -1 y 1."
  },
  {
    pregunta: "¿Cuál es el logaritmo natural de 1?",
    opciones: ["1", "e", "0", "Indefinido"],
    respuestaCorrecta: 2,
    retroalimentacion: "Cualquier base elevada a la potencia 0 es igual a 1."
  },
  {
    pregunta: "Si dos ángulos son suplementarios, suman:",
    opciones: ["90°", "180°", "360°", "45°"],
    respuestaCorrecta: 1,
    retroalimentacion: "Suplementarios suman 180°, complementarios 90°."
  },
  {
    pregunta: "Calcula el valor de 0! (factorial de cero):",
    opciones: ["0", "1", "Indefinido", "10"],
    respuestaCorrecta: 1,
    retroalimentacion: "Por convención matemática, 0! se define como 1."
  },
  {
    pregunta: "Simplifica: (x²y)³",
    opciones: ["x⁵y³", "x⁶y", "x⁶y³", "x²y³"],
    respuestaCorrecta: 2,
    retroalimentacion: "Los exponentes se multiplican: x^(2*3) y^(1*3) = x⁶y³."
  },
  {
    pregunta: "¿Cuál es la hipotenusa si los catetos son 1 y 1?",
    opciones: ["1", "2", "√2", "√1"],
    respuestaCorrecta: 2,
    retroalimentacion: "c = √(1²+1²) = √2."
  },
  {
    pregunta: "Resuelve para x: log₂(x) = 3",
    opciones: ["6", "9", "8", "5"],
    respuestaCorrecta: 2,
    retroalimentacion: "Convertido a forma exponencial: 2³ = x. Por tanto x = 8."
  },
  {
    pregunta: "¿Cuál es la pendiente de una recta horizontal?",
    opciones: ["1", "0", "Indefinida", "-1"],
    respuestaCorrecta: 1,
    retroalimentacion: "No hay cambio en 'y', por lo que m = 0/Δx = 0."
  },
  {
    pregunta: "Derivada de f(x) = tan(x):",
    opciones: ["sec(x)", "sec²(x)", "cot(x)", "-sec²(x)"],
    respuestaCorrecta: 1,
    retroalimentacion: "La derivada de la función tangente es la secante al cuadrado."
  },
  {
    pregunta: "Integral de ∫ (1/x²) dx:",
    opciones: ["-1/x + C", "1/x + C", "ln|x²| + C", "x⁻¹ + C"],
    respuestaCorrecta: 0,
    retroalimentacion: "∫ x⁻² dx = x⁻¹/-1 = -1/x + C."
  },
  {
    pregunta: "Valor de sen(π):",
    opciones: ["1", "0", "-1", "0.5"],
    respuestaCorrecta: 1,
    retroalimentacion: "A 180° (π), la coordenada y es 0."
  },
  {
    pregunta: "¿Qué es un número primo?",
    opciones: ["Número par", "Divisible solo por 1 y sí mismo", "Múltiplo de 3", "Número negativo"],
    respuestaCorrecta: 1,
    retroalimentacion: "Es la definición fundamental de los números primos."
  },
  {
    pregunta: "Si x = 2, calcula x³ - x²:",
    opciones: ["2", "4", "8", "0"],
    respuestaCorrecta: 1,
    retroalimentacion: "2³ - 2² = 8 - 4 = 4."
  },
  {
    pregunta: "¿Cuál es el perímetro de un cuadrado de área 16?",
    opciones: ["16", "8", "20", "4"],
    respuestaCorrecta: 0,
    retroalimentacion: "Lado = √16 = 4. Perímetro = 4 * 4 = 16."
  },
  {
    pregunta: "Derivada de f(x) = 2eˣ:",
    opciones: ["eˣ", "2eˣ", "2x", "2"],
    respuestaCorrecta: 1,
    retroalimentacion: "Las constantes se mantienen al derivar, y la derivada de eˣ es eˣ."
  },
  {
    pregunta: "Límite cuando x tiende a 0 de sen(x)/x:",
    opciones: ["0", "∞", "1", "Indefinido"],
    respuestaCorrecta: 2,
    retroalimentacion: "Es un límite notable fundamental en cálculo."
  },
  {
    pregunta: "¿Cuál es la suma de 1/3 + 1/3 + 1/3?",
    opciones: ["1/9", "3/9", "1", "0.33"],
    respuestaCorrecta: 2,
    retroalimentacion: "3/3 es igual a 1 entero."
  }
];
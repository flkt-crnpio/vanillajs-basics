/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 *
 * Parameter(s):
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(expressions) {
    const [area, perimetro] = expressions;
    const raiz = (Math.sqrt(Math.pow(perimetro,2) - 16*area));
    const sP = (perimetro + raiz) / 4;
    const sM = (perimetro - raiz) / 4;

    return [sP,sM].sort();
}

const expression = [ 140, 48 ];

console.log(sides(expression))

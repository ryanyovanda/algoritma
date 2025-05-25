export function diagonalDifference(matrix: number[][]): number {
    let primary = 0;
    let secondary = 0;
    const n = matrix.length;
  
    for (let i = 0; i < n; i++) {
      primary += matrix[i][i];
      secondary += matrix[i][n - 1 - i];
  
    return Math.abs(primary - secondary);
  }
}
  
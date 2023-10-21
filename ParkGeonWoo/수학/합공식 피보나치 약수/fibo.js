function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else if (n >= 2) {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
function logical() {
    const a = true;
    const b = 1;
    const c = 6;
    const d = 'String';
    const e = false;
    console.log(a, b, c, d, e);
    const f = 5;
    console.log(f > b, f < c, f >= b, f <= c, f == c, f != c);
    const g = '6';
    console.log(c == g, c === g);
    const b2 = 'False';
    console.log(a == b, b == b2);
    const b3 = 0;
    console.log('logical operators', a || e, a && e, !a, !e, !!b3);
}
logical();

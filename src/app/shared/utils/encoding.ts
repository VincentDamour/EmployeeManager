const padEnd = (s, l) => (s + "                                    ").substring(0, l);

const encode = value => {
    const paddedValue = padEnd(value, 16);
    return window.btoa(paddedValue)
};

const decode = encodedStr => !!encodedStr ? window.atob(encodedStr).trim() : '';

export { decode, encode };

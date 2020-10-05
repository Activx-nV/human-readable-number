module.exports = function toReadable(number) {
    let temp = '';
    let arrayOfDigits = Array.from(String(number), Number);
    if (number == 0) return 'zero';

    else if (typeof number == 'number' && arrayOfDigits.length == 3) {
        arrayOfDigits = Array.from(String(number), Number);
        if (arrayOfDigits.length == 3)
            for (let i = 0; i <= arrayOfDigits.length - 1; i++) {
                if (i == 0) {
                    switch (arrayOfDigits[i]) {
                        case 1: temp += `one hundred `;
                            break;
                        case 2: temp += `two hundred `;
                            break;
                        case 3: temp += `three hundred `;
                            break;
                        case 4: temp += `four hundred `;
                            break;
                        case 5: temp += `five hundred `;
                            break;
                        case 6: temp += `six hundred `;
                            break;
                        case 7: temp += `seven hundred `;
                            break;
                        case 8: temp += `eight hundred `;
                            break;
                        case 9: temp += `nine hundred `;
                            break;
                    }
                } else if (i == 1 && arrayOfDigits[i] !== 1) {
                    switch (arrayOfDigits[i]) {
                        case 2: temp += `twenty `;
                            break;
                        case 3: temp += `thirty `;
                            break;
                        case 4: temp += `forty `;
                            break;
                        case 5: temp += `fifty `;
                            break;
                        case 6: temp += `sixty `;
                            break;
                        case 7: temp += `seventy `;
                            break;
                        case 8: temp += `eighty `;
                            break;
                        case 9: temp += `ninety `;
                            break;
                    }
                } else if (arrayOfDigits[1] == 1 && i == 1) {
                    switch (arrayOfDigits[2]) {
                        case 0: temp += `ten`;
                            break;
                        case 1: temp += `eleven`;
                            break;
                        case 2: temp += `twelve`;
                            break;
                        case 3: temp += `thirteen`;
                            break;
                        case 4: temp += `fourteen`;
                            break;
                        case 5: temp += `fifteen`;
                            break;
                        case 6: temp += `sixteen`;
                            break;
                        case 7: temp += `seventeen`;
                            break;
                        case 8: temp += `eighteen`;
                            break;
                        case 9: temp += `nineteen`;
                            break;
                    }
                    break;
                } else if (i == 2 && arrayOfDigits[1] !== 1) {
                    switch (arrayOfDigits[i]) {
                        case 1: temp += `one`;
                            break;
                        case 2: temp += `two`;
                            break;
                        case 3: temp += `three`;
                            break;
                        case 4: temp += `four`;
                            break;
                        case 5: temp += `five`;
                            break;
                        case 6: temp += `six`;
                            break;
                        case 7: temp += `seven`;
                            break;
                        case 8: temp += `eight`;
                            break;
                        case 9: temp += `nine`;
                            break;
                    }
                }
            }
    } else if (typeof number == 'number' && arrayOfDigits.length == 2) {
        arrayOfDigits = Array.from(String(number), Number);
        if (arrayOfDigits.length == 2) {
            for (let i = 0; i <= arrayOfDigits.length - 1; i++) {
                if (i == 0 && arrayOfDigits[0] !== 1) {
                    switch (arrayOfDigits[i]) {
                        case 2: temp += `twenty `;
                            break;
                        case 3: temp += `thirty `;
                            break;
                        case 4: temp += `forty `;
                            break;
                        case 5: temp += `fifty `;
                            break;
                        case 6: temp += `sixty `;
                            break;
                        case 7: temp += `seventy `;
                            break;
                        case 8: temp += `eighty `;
                            break;
                        case 9: temp += `ninety `;
                            break;
                    }
                } else if (i == 0 && arrayOfDigits[0] == 1) {
                    switch (arrayOfDigits[1]) {
                        case 0: temp += `ten`;
                            break;
                        case 1: temp += `eleven`;
                            break;
                        case 2: temp += `twelve`;
                            break;
                        case 3: temp += `thirteen`;
                            break;
                        case 4: temp += `fourteen`;
                            break;
                        case 5: temp += `fifteen`;
                            break;
                        case 6: temp += `sixteen`;
                            break;
                        case 7: temp += `seventeen`;
                            break;
                        case 8: temp += `eighteen`;
                            break;
                        case 9: temp += `nineteen`;
                            break;
                    }
                    break;
                } else if (i == 1) {
                    switch (arrayOfDigits[i]) {
                        case 1: temp += `one`
                            break;
                        case 2: temp += `two`;
                            break;
                        case 3: temp += `three`;
                            break;
                        case 4: temp += `four`;
                            break;
                        case 5: temp += `five`;
                            break;
                        case 6: temp += `six`;
                            break;
                        case 7: temp += `seven`;
                            break;
                        case 8: temp += `eight`;
                            break;
                        case 9: temp += `nine`;
                            break;
                    }
                }
            }
        }
    } else if (typeof number == 'number' && arrayOfDigits.length == 1) {
        switch (arrayOfDigits[0]) {
            case 1: temp += `one`
                break;
            case 2: temp += `two`;
                break;
            case 3: temp += `three`;
                break;
            case 4: temp += `four`;
                break;
            case 5: temp += `five`;
                break;
            case 6: temp += `six`;
                break;
            case 7: temp += `seven`;
                break;
            case 8: temp += `eight`;
                break;
            case 9: temp += `nine`;
                break;
        }
    }

    return temp.trim();
}

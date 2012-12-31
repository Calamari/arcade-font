/**
 * arcade-font
 * A javascript canvas based 8 bit version of old school monospace fonts
 * @author    g.tavonius@gmail.com
 * @github    https://github.com/Calamari/arcade-font
 * @licence   Just use it!
 */
;(function(win, doc, undef) {
  "use strict";
  var ArcadeFont = {
    // Problems with this font:
    // - the Y is not 7 width
    // - the j somehow feels not quite right
    alphabet: {
      'A': '28,54,99,99,127,99,99',
      'B': '63,99,99,63,99,99,63',
      'C': '62,99,3,3,3,99,62',
      'D': '31,51,99,99,99,51,31',
      'E': '127,3,3,63,3,3,127',
      'F': '63,3,3,31,3,3,3',
      'G': '62,99,3,115,99,99,62',
      'H': '99,99,99,127,99,99,99',
      'I': '30,12,12,12,12,12,30',
      'J': '96,96,96,96,96,99,62',
      'K': '99,51,27,15,27,51,99',
      'L': '3,3,3,3,3,3,127',
      'M': '99,119,127,107,99,99,99',
      'N': '99,103,111,127,123,115,99',
      'O': '62,99,99,99,99,99,62',
      'P': '63,99,99,99,63,3,3',
      'Q': '62,99,99,99,123,51,94',
      'R': '63,99,99,63,27,51,99',
      'S': '62,99,3,62,96,99,62',
      'T': '63,12,12,12,12,12,12',
      'U': '99,99,99,99,99,99,62',
      'V': '99,99,99,99,54,28,8',
      'W': '99,99,99,107,127,119,99',
      'X': '99,119,62,28,62,119,99',
      'Y': '51,51,51,30,12,12,12',
      'Z': '127,112,56,28,14,7,127',
      'a': '0,0,62,96,126,99,126',
      'b': '3,3,3,63,99,99,63',
      'c': '0,0,62,3,3,3,62',
      'd': '96,96,96,126,99,99,126',
      'e': '0,0,62,99,127,3,62',
      'f': '56,12,30,12,12,12,12',
      'g': '0,0,126,99,99,126,96,62',
      'h': '3,3,3,63,99,99,99',
      'i': '12,0,14,12,12,12,30',
      'j': '24,0,28,24,24,24,24,14',
      'k': '3,3,99,51,31,51,99',
      'l': '14,12,12,12,12,12,30',
      'm': '0,0,55,127,107,107,99',
      'n': '0,0,31,51,51,51,51',
      'o': '0,0,62,99,99,99,62',
      'p': '0,0,63,99,99,63,3,3',
      'q': '0,0,126,99,99,126,96,96',
      'r': '0,0,31,51,3,3,3',
      's': '0,0,62,3,62,96,63',
      't': '12,12,30,12,12,12,56',
      'u': '0,0,99,99,99,99,126',
      'v': '0,0,99,99,54,28,8',
      'w': '0,0,99,107,107,127,54',
      'x': '0,0,99,54,28,54,99',
      'y': '0,0,99,99,99,126,96,62',
      'z': '0,0,127,56,28,14,127',
      ' ': '0,0,0,0,0,0,0',
      '1': '12,14,12,12,12,12,63',
      '2': '62,99,112,60,6,3,127',
      '3': '126,48,24,60,96,99,62',
      '4': '56,60,54,51,127,48,48',
      '5': '127,3,63,96,96,99,62',
      '6': '62,99,3,63,99,99,62',
      '7': '127,96,48,24,12,12,12',
      '8': '62,99,99,62,99,99,62',
      '9': '62,99,99,126,96,99,62',
      '0': '62,99,99,99,99,99,62',
      '(': '24,12,6,6,6,12,24',
      ')': '6,12,24,24,24,12,6',
      '{': '24,12,12,6,12,12,24',
      '}': '6,12,12,24,12,12,6',
      '<': '48,24,12,6,12,24,48',
      '>': '3,6,12,24,12,6,3',
      "'": '24,24,12,0,0,0,0',
      '"': '102,102,51,0,0,0,0',
      '.': '0,0,0,0,0,12,12',
      '!': '12,12,12,12,0,0,12',
      '-': '0,0,0,63,0,0,0',
      '+': '0,12,12,63,12,12,0',
      ',': '0,0,0,0,0,12,12,6',
      ':': '0,12,12,0,0,12,12',
      ';': '0,12,12,0,0,12,12,6',
      '?': '62,99,48,24,12,0,12',
      '$': '8,62,3,62,96,63,8',
      '%': '67,99,48,24,12,102,98',
      '&': '28,54,28,14,123,51,110',
      '=': '0,0,63,0,63,0,0',
      '_': '0,0,0,0,0,0,127',
      '^': '8,28,54,99,0,0,0',
      '°': '60,102,102,60,0,0,0',
      '€': '62,99,15,3,15,99,62',
      '#': '20,20,62,20,62,20,20',
      '*': '0,54,28,127,28,54,0',
      '/': '64,96,48,24,12,6,2',
      '\\': '2,6,12,24,48,96,64',
      '[': '30,6,6,6,6,6,30',
      ']': '60,48,48,48,48,48,60'
    },
//1,2,4,8,16,32,64
/* Here are some characters with a font width of only 6 in the lower case versions:
    alphabet6: {
      'A': '28,54,99,99,127,99,99',
      'B': '63,99,99,63,99,99,63',
      'C': '62,99,3,3,3,99,62',
      'D': '31,51,99,99,99,51,31',
      'E': '127,3,3,63,3,3,127',
      'F': '63,3,3,31,3,3,3',
      'G': '62,99,3,115,99,99,62',
      'H': '99,99,99,127,99,99,99',
      'I': '30,12,12,12,12,12,30',
      'J': '96,96,96,96,96,99,62',
      'K': '99,51,27,15,27,51,99',
      'L': '3,3,3,3,3,3,127',
      'M': '99,119,127,107,99,99,99',
      'N': '99,103,111,127,123,115,99',
      'O': '62,99,99,99,99,99,62',
      'P': '63,99,99,99,63,3,3',
      'Q': '62,99,99,99,123,51,94',
      'R': '63,99,99,63,27,51,99',
      'S': '62,99,3,62,96,99,62',
      'T': '63,12,12,12,12,12,12',
      'U': '99,99,99,99,99,99,62',
      'V': '99,99,99,99,54,28,8',
      'W': '99,99,99,107,127,119,99',
      'X': '99,119,62,28,62,119,99',
      'Y': '51,51,51,30,12,12,12',
      'Z': '127,112,56,28,14,7,127',
      'a': '0,0,60,96,124,102,124',
      'b': '3,3,3,63,99,99,63',
      'c': '0,0,62,3,3,3,62',
      'd': '96,96,96,126,99,99,126',
      'e': '0,0,62,99,127,3,62',
      'f': '56,12,30,12,12,12,12',
      'g': '0,0,126,99,99,126,96,62',
      'h': '3,3,3,63,99,99,99',
      'i': '12,12,0,14,12,12,30',
      'j': '24,24,0,28,24,24,24,14',
      'k': '3,3,51,27,15,27,51',
      'l': '14,12,12,12,12,12,30',
      'm': '0,0,55,127,107,107,99',
      'n': '0,0,31,51,51,51,51',
      'o': '0,0,30,51,51,51,30',
      'p': '0,0,31,51,51,31,3,3',
      'q': '0,0,126,99,99,126,96,96',
      'r': '0,0,31,51,3,3,3',
      's': '0,0,62,3,30,48,31',
      't': '12,12,30,12,12,12,56',
      'u': '0,0,51,51,51,51,62',
      'v': '0,0,51,51,51,30,12',
      'w': '0,0,99,107,107,127,54',
      'x': '0,0,99,54,28,54,99',
      'y': '0,0,99,99,99,126,96,62',
      ' ': '0,0,0,0,0,0,0',
      '1': '12,14,12,12,12,12,63',
      '2': '62,99,112,60,6,3,127',
      '3': '126,48,24,60,96,99,62',
      '4': '56,60,54,51,127,48,48',
      '5': '127,3,63,96,96,99,62',
      '6': '62,99,3,63,99,99,62',
      '7': '127,96,48,24,12,12,12',
      '8': '62,99,99,62,99,99,62',
      '9': '62,99,99,126,96,99,62',
      '0': '62,99,99,99,99,99,62',
      "'": '12,12,6,0,0,0,0',
      '"': '102,102,51,0,0,0,0',
      '.': '0,0,0,0,0,6,6',
      '!': '6,6,6,6,0,0,6',
      ',': '0,0,0,0,12,12,6',
      ':': '0,6,6,0,6,6,0',
      ';': '0,12,12,0,12,12,6',
      '?': '62,99,48,24,12,0,12',
      '$': '12,62,3,30,48,31,12'
    },
*/

    // additional space between letters
    gutter: 0,

    // additional space between lines
    lineSpacing: 0,

    version: '0.6.1',

    blueprint: function(text) {
      var blueprint = [],
          letter, letterCode, line, g, i, l, j;
      for (i in text) {
        letter = this.alphabet[text[i]];
        if (letter) {
          letterCode = letter.split(',');
          // add the eighth line for rows that haven't defined it
          if (letterCode.length < 8) {
            letterCode.push('');
          }
          for (j = 0, l = letterCode.length; j<l; ++j) {
            line = EightBit.decodeNumber(letterCode[j]);
            if (!blueprint[j]) {
              blueprint[j] = '';
            }
            blueprint[j] += line;
            for (g = this.gutter; g--;) {
              blueprint[j] += '0';
            }
          }
        }
      }
      return blueprint.join('\n');
    }
  };
  var EightBit = {
    encode: function(str) {
      var codes = [],
          lines = str.split('\n'),
          i, l;
      for (i = 0, l = lines.length; i<l; ++i) {
        codes.push(this.encodeLine(lines[i]));
      }
      return codes.join(',');
    },

    decode: function(code) {
      var result = [],
          lines = code.split(','),
          i, l;
      for (i = 0, l = lines.length; i<l; ++i) {
        result.push(this.decodeNumber(lines[i]));
      }
      return result.join('\n');
    },

    encodeLine: function(line) {
      var x = 0;
      for (var i in line) {
        x += line[i] === '1' ? Math.pow(2, i) : 0;
      }
      return x;
    },

    decodeNumber: function(nr) {
      var line = '',
          i, p;
      for (i = 8; i--;) {
        p = Math.pow(2, i);
        if (p <= nr) {
          nr -= p;
          line = '1' + line;
        } else {
          line = '0' + line;
        }
      }
      return line;
    }
  };

  var ArcadeText = function(text, options) {
    options = Object.extend({
      gutter: ArcadeFont.gutter,
      lineSpacing: ArcadeFont.lineSpacing,
      canvas: doc.createElement('canvas'),
      color: '#fff',
      pixelSize: 2,
      x: 0,
      y: 0
    }, options || {});
    text = text.toString();

    var lineWidth = options.lineWidth,
        blueLines = [],
        canvas    = options.canvas,
        drawn     = false,
        numLines  = 1,
        lastBreak = 0,
        newLine   = '',
        breakAt;

    if (lineWidth) {
      while (lastBreak < text.length) {
        newLine = text.substr(lastBreak, lineWidth);
        breakAt = newLine.lastIndexOf(' ');
        if (breakAt > 0) {
          blueLines.push(ArcadeFont.blueprint(newLine.substr(0, breakAt)));
        } else {
          blueLines.push(ArcadeFont.blueprint(newLine));
          if (breakAt === -1) {
            breakAt += newLine.length;
          }
        }
        // +1 for removing space
        lastBreak += breakAt+1;
      }
    } else {
      blueLines.push(ArcadeFont.blueprint(text));
    }
    numLines = blueLines.length;

    // calculate canvas Size
    canvas.width = 8 * (options.pixelSize + options.gutter) * text.length;
    canvas.height = (8 + options.lineSpacing) * options.pixelSize * numLines;

    // draws the text onto own canvas
    function draw() {
      if (drawn) { return; }
      var ctx        = canvas.getContext('2d'),
          lineHeight = options.lineSpacing + 8,
          rows, row, pixel;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = options.color;
      blueLines.forEach(function(blueLine, lineNum) {
        rows = blueLine.split('\n');
        for (var y=0,yl=rows.length; y<=yl; ++y) {
          row = rows[y] || '';
          for (var x=0,xl=row.length; x<=xl; ++x) {
            pixel = row[x];
            if (pixel === '1') {
              ctx.fillRect(Math.round(options.pixelSize * x), Math.round(options.pixelSize * (y + lineNum * lineHeight)), options.pixelSize, options.pixelSize);
            }
          }
        }
      });
      drawn = true;
    }

    return {
      set: function(newOptions) {
        Object.extend(options, newOptions);
        drawn = false;
      },
      text: function(newText) {
        text = newText;
        blueprint = ArcadeFont.blueprint(text.toString());
        drawn = false;
      },
      draw: function(context) {
        draw();
        if (context !== undef) {
          context.drawImage(canvas, options.x, options.y);
        }
        return canvas;
      },
      width: canvas.width,
      height: canvas.height
    };
  };

  win.ArcadeFont = ArcadeFont;
  win.ArcadeText = ArcadeText;
}(window, document));

var TypeWriter = (function(window){

	var ctx,
		options = {
            start: 0,
            left: 0,
            top: 100,
            space: 35,
            shadow: true,
            shadowX: 2,
            shadowY: 2,
            textColor: 'rgba(0,0,0,1.0)',
            font: '80px Ubuntu Mono, monospace',
            callback: function(){}
        };

	var TypeWriter = function TypeWriter(canvas, defaults)
	{
		ctx = document.getElementById(canvas).getContext('2d');
		options = setOptions(options, defaults);
		ctx.font = options.font;
		this.setColor(options.textColor);
		ctx.fillStyle = 'rgba(255,255,255,1)';
	};

	TypeWriter.prototype.type = function(word)
	{
        var arr = [],
        i = 0,
        length;

        for (i, length = word.length; i < length; i++)
        {
            arr.push(word.charAt(i));
        }
		typeWord(this, word, options.start, options.left);
	};

	function typeWord(tw, word, start, left)
	{
		if (typeof start === 'undefined')
		{
			start = 0;
		}
		if (typeof left === 'undefined')
		{
			left = 0;
		}
		if (options.shadow)
		{
			tw.setColor('rgba(0,0,0,1.0)');
			ctx.fillText(word[start], left + options.shadowX, options.top + options.shadowY);
			tw.setColor(options.textColor);
		}

		ctx.fillText(word[start], left, options.top);
		start++;
		left += options.space;

		if (start < word.length)
		{
			setTimeout(function(){typeWord(tw, word, start, left);}, random(50, 200));
		}
		else
		{
			options.callback();
		}
    }

	TypeWriter.prototype.setColor = function(color)
	{
		if (typeof ctx !== 'undefined')
		{
			ctx.fillStyle = color;
		}
	};

	TypeWriter.prototype.setFont = function(font)
	{
		if (typeof font === 'undefined')
		{
			font = options.font;
		}
		options.font = font;
		if (typeof ctx !== 'undefined')
		{
			ctx.font = font;
		}
	};

	TypeWriter.prototype.clear = function()
	{
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	};

	function setOptions(defaults, options)
	{
		var prop;
		for (prop in defaults)
		{
			defaults[prop] = typeof options[prop] === 'undefined' ? defaults[prop] : options[prop];
		}
		return defaults;
	}

	function random(min, max, round)
    {
        var x = Math.random() * (max-min) + min;
        if (round)
        {
          x = Math.floor(x);
        }
        return x;
    }

	return TypeWriter;

}(window));
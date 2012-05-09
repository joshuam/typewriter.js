// Typewriter.js
// A simple typewriter simulator
// Author: Josh McCarthy
// licensed under the MIT license

(function(window){

	var _element;
	var _callback;
	var TypeWriter = function TypeWriter(elementId)
	{
		this.setPaper(elementId);
	};

	TypeWriter.prototype.type = function(word, callback)
	{
        var arr = [],
        i = 0,
        length;
        this.setCallback(callback);
        for (i, length = word.length; i < length; i++)
        {
            arr.push(word.charAt(i));
        }
		typeWord(this, word, 0);
	};

	TypeWriter.prototype.setPaper = function(elementId)
	{
		_element = $('#' + elementId);
	};

	TypeWriter.prototype.setCallback = function(callback)
	{
		_callback = callback;
	};

	function typeWord(tw, word, start)
	{
		_element.html(_element.html() + word[start]);
		start++;

		if (start < word.length)
		{
			setTimeout(function(){typeWord(tw, word, start);}, random(50, 200));
		}
		else
		{
			if (typeof _callback !== 'undefined')
			{
				_callback();
			}
		}
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

	if (typeof window.TypeWriter === 'undefined')
	{
	window.TypeWriter = TypeWriter;
	}

}(window));

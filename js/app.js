(function() {
  $(function() {
    var chars, correct, next_char_index;
    chars = $("#test_text").text().replace(/^\s+/, '').replace(/\s+$/, '').split("");
    next_char_index = 0;
    correct = 0;
    return $("#test").on("keydown", function(e) {
      var char;
      e.preventDefault();
      char = String.fromCharCode(e.which);
      if (char === chars[next_char_index].toUpperCase()) {
        puts("great job! " + char + " is " + (chars[next_char_index].toUpperCase()));
        next_char_index++;
        correct++;
      } else {
        puts("booooo! " + char + " is NOT " + (chars[next_char_index].toUpperCase()));
      }
      return $("#score").text("" + (Math.floor((correct / chars.length) * 100)) + "%");
    });
  });

}).call(this);

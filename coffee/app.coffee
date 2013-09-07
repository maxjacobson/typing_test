$ ->
  chars = $("#test_text").text()
          .replace(/^\s+/, '') # remove leading space
          .replace(/\s+$/, '') # remove trailing space
          .split("")
  next_char_index = 0
  correct = 0
  $("#test").on "keydown", (e) ->
    e.preventDefault()
    char = String.fromCharCode(e.which)
    if char is chars[next_char_index].toUpperCase()
      current_val = $("#test").val()
      $("#test").val(current_val + char)
      puts "great job! #{char} is #{chars[next_char_index].toUpperCase()}"
      next_char_index++
      correct++
    else
      puts "booooo! #{char} is NOT #{chars[next_char_index].toUpperCase()}"
    $("#score").text("#{Math.floor((correct / chars.length) * 100)}%")


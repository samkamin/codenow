function markdone(cb) {
   var row = cb.closest("tr");
   row.classList.toggle("done");
}

function addsillytodo() {
    var todolist = $("table");
    todolist.append("<tr><td>a</td><td>b</td></tr>");
}

function addtodo() {
    var todo = prompt("what's the job, boss? ");
    var poms = prompt("how many pomodoros?");
    var todolist = $("table");
    todolist.append("<tr><td>" + todo + "</td>"
                    + "<td>" + poms + " poms </td></tr>");
}


function ReplClient(lang,error,output,result,ready) {
  
  var commands = []
  var sid

  YUI().use("jsonp", function(Y) {
    // need a service to get a random number as inside an iframe, Math.random always gives
    // the same result!
    Y.jsonp('http://repl.fluentlearning.co.uk/uuid.json?jsonp={callback}', function(data) {
      sid = data.uuid
      ready()
    })
  })
  
  this.exec = function(command) {
    var runCmd
    var url = 'http://repl.fluentlearning.co.uk/'+lang+'.json?expr=' + encodeURIComponent(command)
    url += '&sid=' + sid
    url += '&jsonp={callback}'
    try {
      var resultHandler = function(data) {
        commands.shift()
        if (data.error)
          error(data.message)
        else {
          if (data.out)
            output(data.out)
          
          if (data.result)
            result(data.result)
          else
            result('')
        }

        if (commands.length > 0)
          runCmd(commands[0])
      }

      runCmd = function(url) {
        YUI().use("jsonp", function(Y) { 
          Y.jsonp(url, resultHandler)
        })
      }

      commands.push(url)
      if (commands.length == 1)
        runCmd(url)
    } catch (e) {
      error(e)
    }
  }
}
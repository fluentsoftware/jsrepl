this.Math.random = parent.Math.random

function ReplClient(lang,error,output,result) {
  var sid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        r = Math.random() * 16 | 0
        v = c == 'x' ? r : (r & 0x3|0x8)
        return v.toString(16)
      })
  
  var commands = []
  
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
class self.JSREPLEngine
  constructor: (input, @output, @result, @error, @sandbox, ready) ->    
    @inspect = @sandbox.console.inspect
    @functionClass = @sandbox.Function
    @sandbox.__eval = @sandbox.eval    
    @client = new ReplClient('clojure',@error,@output,@result)
    ready()

  Eval: (command) ->
    @client.exec(command)

  GetNextLineIndent: (command) ->
    return 0

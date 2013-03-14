class self.JSREPLEngine
  constructor: (input, @output, @result, @error, @sandbox, ready) ->    
    @inspect = @sandbox.console.inspect
    @functionClass = @sandbox.Function
    @sandbox.__eval = @sandbox.eval        
    @script = ""
    @outputLength = 0
    ready()

  Eval: (command) ->  
    opts = {filesystem: new PHP.Adapters.LocalFileSystem(), SERVER: {SCRIPT_FILENAME: window.location.pathname}}    
    @script = @script + "\n" + command
    php = new PHP('<?php ' + @script + '?>',opts)
    @output(php.vm.OUTPUT_BUFFER.substring(@outputLength))
    @outputLength = php.vm.OUTPUT_BUFFER.length
    if (php.vm.RETURN_VALUE)
        @result(php.vm.RETURN_VALUE)

  GetNextLineIndent: (command) ->
    return 0

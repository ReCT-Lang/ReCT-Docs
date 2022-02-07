# Setting up a project

The ReCT Compiler has built-in project support. They aren't necessary, but useful for bigger works and keeping them organized.  

## Make a new project

To make a new project, just open a terminal and type:

```
rctc create projectName
```

If you want it to create the project in a new directory just use the `-n` option:

```
rctc create projectName -n
```

And finally if you want rctc to generate some vscode task files as well just use the `-v` or `--vscode` option:

```
rctc create projectName -n --vscode
```

To run a project just use the `rctc run` command in the projects directory.

```
rctc run
```

## Compiling without a Project

When coding in ReCT you sometimes don't want to use a project. In that case you can build your program the old fashioned way.  
Call the rctc command followed by your source file and the `-s` and `-f` flags. The `-s` flag will auto-reference all standard Dotnet Assemblies, the `-f` flag will evaluate preprocessor statements like `#attach`.

```
rctc ./sourcefile.rct -s -f
```

You can also set an output file. This is optional and by default it will just choose the source file's name with the ending `.dll`.

```
rctc ./sourcefile.rct -s -f -o ./outputfile.dll
```

You can find more info on the Compilers help page when doing:

```
rctc -h
```
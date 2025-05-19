# typescript-10-apps

10 simple CLI Typescript & Node console apps.

> Using Node > `23.6.0` you can use typescript natively instead of `tsc`
>
> Automatically set the node version with the provided `.nvmrc`, add to `.bash_profile`:
>
> ```
> find-up() {
>  path=$(pwd)
>  while [[ "$path" != "" && ! -e "$path/$1" ]]; do
>    path=${path%/*}
>  done
>  echo "$path"
> }
>
> cdnvm() {
>  cd "$@"
>  nvm_path=$(find-up .nvmrc | tr -d '\n')
>  if [[ -s "$nvm_path/.nvmrc" && -r "$nvm_path/.nvmrc" ]]; then
>    nvm use "$(cat "$nvm_path/.nvmrc")"
>  elif [[ -n "$(nvm version default)" ]]; then
>    nvm use default
>  fi
> }
> alias cd='cdnvm'
> cd $PWD
> ```

## Exercises

1.  ✅ Simple hello world app

        node src/01-hello-world.ts

2.  ✅ Guess that number app

        node src/02-guess-that-number.ts

3.  ✅ Birthday app

        node src/03-birthday.ts

curl -fsSL https://deno.land/x/install/install.sh | sh
## check deno version 
deno --version

## create your first app 


deno run https://deno.land/std/examples/welcome.ts 

# Add deno to PATH


export DENO_INSTALL="/home/rassakra/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"





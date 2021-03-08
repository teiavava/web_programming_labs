timeout = 2000

function resolve(timeout) {
    return new Promise(resolve => {
      setTimeout(() => {resolve('2s later... Done!')}, timeout);
    });
}

async function func() {
    console.log('Waiting...');
    console.log(await resolve(timeout));
}

func()
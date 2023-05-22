// replace the name of the contract with which one you want to deploy!
const contractNames = ["Game1", "Game2", "Game3", "Game4", "Game5"];

async function main() {
    let game;
    const games = []
    for(let i = 0; i < contractNames.length; i++) {
        games.push(await hre.ethers.getContractFactory(contractNames[i]));
        game = await games[i].deploy();
        console.log(`${contractNames[i]} deployed to address: ${game.address}`);
    }
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
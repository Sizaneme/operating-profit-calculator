document.getElementById('profitForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const revenue = parseFloat(document.getElementById('revenue').value);
    const cogs = parseFloat(document.getElementById('cogs').value);
    const operatingExpenses = parseFloat(document.getElementById('operatingExpenses').value);
    
    const operatingProfit = revenue - cogs - operatingExpenses;
    const operatingProfitMargin = (operatingProfit / revenue) * 100;
    
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Operating Profit: $${operatingProfit.toFixed(2)}</p>
        <p>Operating Profit Margin: ${operatingProfitMargin.toFixed(2)}%</p>
    `;
});

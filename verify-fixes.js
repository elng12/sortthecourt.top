// SEO Fix Verification Script
// Run this in browser console after deployment to verify fixes

console.log('🔍 Starting SEO Fix Verification...');

const checks = [
    {
        name: 'Homepage loads correctly',
        test: () => window.location.pathname === '/' && document.title.includes('Sort the Court')
    },
    {
        name: 'Canonical URL is set',
        test: () => document.querySelector('link[rel="canonical"]')?.href === 'https://sortthecourt.top/'
    },
    {
        name: 'Meta description exists',
        test: () => document.querySelector('meta[name="description"]')?.content.length > 50
    },
    {
        name: 'Structured data exists',
        test: () => document.querySelectorAll('script[type="application/ld+json"]').length > 0
    },
    {
        name: 'Favicon is set',
        test: () => document.querySelector('link[rel="icon"]') !== null
    }
];

// Test redirects (requires manual testing)
const redirectTests = [
    'https://sortthecourt.top/game/',
    'https://sortthecourt.top/play/',
    'https://sortthecourt.top/index.php',
    'https://sortthecourt.top/privacy/',
    'https://sortthecourt.top/terms/'
];

console.log('📋 Running basic checks...');
checks.forEach(check => {
    const result = check.test();
    console.log(`${result ? '✅' : '❌'} ${check.name}: ${result ? 'PASS' : 'FAIL'}`);
});

console.log('\n🔗 Manual redirect tests needed:');
redirectTests.forEach(url => {
    console.log(`Test: ${url}`);
});

console.log('\n📊 Additional checks to perform:');
console.log('1. Check /sitemap.xml loads correctly');
console.log('2. Check /robots.txt loads correctly');
console.log('3. Verify 404.html shows for non-existent pages');
console.log('4. Test privacy.html and terms.html load correctly');
console.log('5. Submit sitemap to Google Search Console');

// Function to test a URL
window.testURL = function(url) {
    fetch(url)
        .then(response => {
            console.log(`${url}: ${response.status} ${response.statusText}`);
            return response.text();
        })
        .then(text => {
            console.log(`Content length: ${text.length} characters`);
        })
        .catch(error => {
            console.error(`Error testing ${url}:`, error);
        });
};

console.log('\n🧪 Use testURL("url") to test specific URLs');
console.log('Example: testURL("/sitemap.xml")');
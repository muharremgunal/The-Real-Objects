// Run with: npx playwright-cli screenshot

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Set viewport size
  await page.setViewportSize({ width: 1920, height: 1080 });
  
  try {
    // Navigate to the page
    await page.goto('https://3000-icco8zxgcsqz8snqaicig-6532622b.e2b.dev', { 
      waitUntil: 'networkidle',
      timeout: 60000 
    });
    
    // Wait a bit more for any animations to settle
    await page.waitForTimeout(3000);
    
    // Take screenshot
    await page.screenshot({ 
      path: 'website-preview.png', 
      fullPage: true,
      type: 'png'
    });
    
    console.log('Screenshot saved as website-preview.png');
  } catch (error) {
    console.error('Error taking screenshot:', error);
    // Take partial screenshot even if there's an error
    await page.screenshot({ 
      path: 'website-preview-partial.png', 
      type: 'png'
    });
    console.log('Partial screenshot saved as website-preview-partial.png');
  } finally {
    await browser.close();
  }
})();
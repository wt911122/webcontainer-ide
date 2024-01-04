export async function componentService() {
    const response = await fetch('/components/component.js');
    const res = await response.text();
    console.log(res);
    return res;
}
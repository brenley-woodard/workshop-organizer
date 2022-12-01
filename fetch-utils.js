const SUPABASE_URL = 'https://ogfxwdqfdtaaoiuiclsh.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nZnh3ZHFmZHRhYW9pdWljbHNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwNjIsImV4cCI6MTk4MzY4NDA2Mn0.5JRX_e27xoEYI26VTDundVtD05vASo1z964M0KcbMNc';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Data functions */

export async function getWorkshops() {
    const response = await client.from('workshops').select('*, students(*)');

    return checkError(response);
}

export async function deleteStudent(studentID) {
    const response = client.from('students').delete().match({ id: studentID }).single();

    return checkError(response);
}

function checkError(response) {
    return response.error ? console.error(response.error) : response.data;
}

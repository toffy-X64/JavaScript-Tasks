export const addMockItems = (store) => {
    const langs = ['C++', 'JS', 'C#', 'NodeJs', 'Java', 'Python', 'PHP', 'Lua'];
    
    const companies = [
        {
            companyName: 'Monobank',
            companyLogo: 'https://play-lh.googleusercontent.com/tVdBTQSX3ek05SxDZJClWtohEohC0EHLF7BRqzfq7tRsr3533ONjQxUd-pmQxjGtb2I'
        },
        {
            companyName: 'Kredobank',
            companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Kredobank_logo.jpg'
        },
        {
            companyName: 'Meta Inc.',
            companyLogo: 'https://images.seeklogo.com/logo-png/47/1/meta-logo-png_seeklogo-477180.png'
        },
        {
            companyName: 'TikTok',
            companyLogo: 'https://img.freepik.com/premium-vector/tik-tok-glitch-icon-social-media-tik-tok-icon-vinnitsa-ukraine-february-22-02-2023_250246-536.jpg?semt=ais_hybrid&w=740&q=80'
        },
        {
            companyName: 'PrivatBank',
            companyLogo: 'https://brandeps.com/logo-download/P/Privat-Bank-logo-01.png'
        },
        {
            companyName: 'A-Bank',
            companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKe9EuB0MKTN4iatjWCKqRJ7oYneXMjuEkwA&s'
        },
        {
            companyName: 'SenseBank',
            companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCCwdpTae2p3xv1brKTBoFeCnXscwrizE_pLUdkQ-IN4W1Xhukdm4XyQxpWdkSqDogGLw&usqp=CAU'
        }
    ];

    const categories = ['it', 'design', 'marketing'];
    const locations = ['Ukraine, Kyiv', 'Ukraine, Lviv', 'Ukraine, Ternopil', 'Ukraine, Kharchiv', 'Ukraine, Odesa', 'Ukraine, Dnipro'];

    for(let i = 0; i <= 100; i++) {
        const randomCompanyIndex = Math.floor(Math.random() * companies.length);
        const companyData = companies[randomCompanyIndex];

        const randomCategoryIndex = Math.floor(Math.random() * categories.length);
        const category = categories[randomCategoryIndex];
        
        const item = {
            companyName: companyData.companyName,
            companyLogo: companyData.companyLogo,
            category: category,
            location: locations[Math.floor(Math.random() * locations.length)],
            salary: Math.floor(Math.random() * 10000) + 1000,
        };

        if (category == 'it') {
            item.title = `${langs[Math.floor(Math.random() * langs.length)]} Developer`
        } else if (category == 'design') {
            item.title = `UX/UI Designer`
        } else if (category == 'marketing') {
            item.title = `SMM Specialist`
        }

        store.add(item);
    }
};
import React from 'react';
import ReactDOM from 'react-dom/client';

// --- SVG Icon Components ---

const LogoIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20v2H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v15H6.5A2.5 2.5 0 0 0 4 19.5" stroke="#4a89f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 7h8m-8 4h4" stroke="#4a89f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const FilterIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 4.5h18m-14 7h10m-6 7h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const SearchIcon = () => (
    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    </svg>
);

const HomeIcon = () => (
     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9.5L12 2l9 7.5V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const ThumbsUpIcon = () => (
    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 18.734V11.5a2.5 2.5 0 012.5-2.5h1.764a2 2 0 001.789-2.894l-3.5-7A2 2 0 005.263 2H9c1.657 0 3 1.343 3 3v5z"></path>
    </svg>
);

const CommentIcon = () => (
    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
    </svg>
);

const ArrowLeftIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
);

const ExternalLinkIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
);

const FileSadIcon = () => (
    <svg className="w-24 h-24 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5" stroke="currentColor" >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 14.25a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 14.25a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
    </svg>
);

const InfoIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

const MessageIcon = () => (
    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
);

const SendIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
);

const NewArticleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <polyline points="14 2 14 8 20 8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></polyline>
        <line x1="12" y1="18" x2="12" y2="12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></line>
        <line x1="9" y1="15" x2="15" y2="15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></line>
    </svg>
);

const SortIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
    </svg>
);

const UpvoteIcon = () => (
    <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 4L3 15h18L12 4z" />
    </svg>
);

const WrenchScrewdriverIcon = () => (
    <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.472-2.472a3.375 3.375 0 00-4.773-4.773L6.75 11.42m5.877 5.877l-5.877-5.877m0 0a3.375 3.375 0 01-4.773-4.773l2.472-2.472" />
    </svg>
);


// --- Mock Data ---

const papersData = [
  { id: 1, source: 'HF', title: 'Sharing is Caring: Efficient LM Post-Training with Collective RL Experience Sharing', abstract: 'Post-training language models (LMs) with reinforcement learning (RL) can enhance their complex reasoning capabilities without supervised fine-tuning, as demonstrated by DeepSeek-R1-Zero. However, effic...', likes: 194, comments: 24 },
  { id: 2, source: 'HF', title: 'Why Language Models Hallucinate', abstract: 'Like students facing hard exam questions, large language models sometimes guess when uncertain, producing plausible yet incorrect statements instead of admitting uncertainty. Such "hallucinations" per...', likes: 145, comments: 7 },
  { id: 3, source: 'HF', title: 'Reverse-Engineered Reasoning for Open-Ended Generation', abstract: 'While the ``deep reasoning\'\' paradigm has spurred significant advances in verifiable domains like mathematics, its application to open-ended, creative generation remains a critical challenge. The two...', likes: 128, comments: 4 },
  { id: 4, source: 'HF', title: 'Parallel-R1: Towards Parallel Thinking via Reinforcement Learning', abstract: 'Parallel thinking has emerged as a novel approach for enhancing the reasoning capabilities of large language models (LLMs) by exploring multiple reasoning paths concurrently. However, activating such ...', likes: 72, comments: 3 },
];

const filtersData = [
    { title: '论文来源', options: ['Acl2025', 'Arxiv', 'Cvpr2025', 'Hf'], type: 'radio' },
    { title: 'AI 标签', options: ['AI-Infrastructure', 'Agent', 'Bench', 'Image-Generation', 'Multimodal', 'Reinforcement-Learning', 'Robot', 'Video-Generation', 'Other'], type: 'checkbox' },
    { title: 'AI 解读', options: ['Reinforcement-Learning', 'Robot', 'Video-Generation', 'Other'], type: 'checkbox' },
];

const suggestedQuestions = [
    "论文试图解决什么问题?",
    "这是否是一个新的问题?",
    "这篇 文章需要验证一个什么科学假设?",
    "有哪些相关研究? 如何归类? 谁是这一课题在领域内值得关注的研究员?",
    "论文中提到的解决方案之关键是什么?",
    "论文中的实验是如何设计的?",
    "用于定量评估的数据集是什么? 代码有没有开源?",
    "论文中的实验及结果有没有很好地支持需要验证的科学假设?",
    "这篇论文到底有什么贡献?",
    "下一步呢? 有什么工作可以继续深入?",
    "这篇论文的主要贡献是什么?",
];

// --- Mock API for Keywords ---

const mockKeywordsData = {
  1: [ { text: 'Reinforcement Learning', color: 'blue' }, { text: 'Language Models', color: 'purple' }, { text: 'Efficiency', color: 'green' } ],
  2: [ { text: 'Hallucination', color: 'orange' }, { text: 'LLM', color: 'blue' }, { text: 'Uncertainty', color: 'gray' } ],
  3: [ { text: 'Reasoning', color: 'purple' }, { text: 'Creative Generation', color: 'green' }, { text: 'Open-Ended', color: 'blue' } ],
  4: [ { text: 'Parallel Thinking', color: 'orange' }, { text: 'RL', color: 'blue' }, { text: 'Reasoning', color: 'purple' } ],
};

// Combine papers with their keywords for easier filtering
const papersWithKeywords = papersData.map(paper => ({
    ...paper,
    keywords: mockKeywordsData[paper.id] || [],
}));


const fetchKeywords = (paperId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mockKeywordsData[paperId]) {
        resolve(mockKeywordsData[paperId]);
      } else {
        reject(new Error(`Keywords for paper ${paperId} not found.`));
      }
    }, 1500); // 1.5 second delay
  });
};

const communityCategories = [
    '所有文章', '分析和解读', '社区动态', '教程', '开源协作', '合作伙伴', '科研相关', 'NLP', 'Audio', 'CV', 'RL', 'AI 伦理', '扩散模型'
];

const communityArticlesData = [
    { id: 1, title: 'PP-OCRV5 on Hugging Face: A Specialized Approach to OCR', author: 'baidu and 5 others', time: '6 days ago', upvotes: 91 },
    { id: 2, title: 'How to Choose the Best Open Source LLM for Your Project in 2025', author: 'dvilasuero', time: '7 days ago', upvotes: 60 },
    { id: 3, title: 'Introducing the Palmyra-mini family: powerful, lightweight, and ready to reason!', author: 'Writer and 1 other', time: '5 days ago', upvotes: 42 },
    { id: 4, title: 'Code a simple RAG from scratch', author: 'ngpson', time: 'Oct 29, 2024', upvotes: 193 },
    { id: 5, title: 'mem-agent: Persistent, Human Readable Memory Agent Trained with Online RL', author: 'driaforall and 1 other', time: '5 days ago', upvotes: 9 },
    { id: 6, title: 'KV Caching Explained: Optimizing Transformer Inference Efficiency', author: 'not-lain', time: 'Jan 30', upvotes: 135 },
];


// --- UI Components ---

const Header = ({ currentPage, onNavigate }) => (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16">
            <div className="flex items-center space-x-3">
                <LogoIcon />
                <div>
                    <h1 className="text-lg font-bold text-gray-800">uPaper</h1>
                    <p className="text-xs text-gray-500">AI前沿学术论文平台</p>
                </div>
            </div>
            <div className="flex items-center space-x-8 ml-10">
                 <button onClick={() => onNavigate('home')} className={`text-lg font-semibold ${currentPage === 'home' ? 'text-brand-blue' : 'text-gray-600 hover:text-brand-blue'} transition`}>首页</button>
                 <button onClick={() => onNavigate('research')} className={`text-lg font-semibold ${currentPage === 'research' ? 'text-brand-blue' : 'text-gray-600 hover:text-brand-blue'} transition`}>AI深度研究</button>
                <button onClick={() => onNavigate('search')} className={`text-lg font-semibold ${currentPage === 'search' ? 'text-brand-blue' : 'text-gray-600 hover:text-brand-blue'} transition`}>智能搜索</button>
                <button onClick={() => onNavigate('knowledge-graph')} className={`text-lg font-semibold ${currentPage === 'knowledge-graph' ? 'text-brand-blue' : 'text-gray-600 hover:text-brand-blue'} transition`}>AI知识图谱</button>
                <button onClick={() => onNavigate('blog')} className={`text-lg font-semibold ${currentPage === 'blog' ? 'text-brand-blue' : 'text-gray-600 hover:text-brand-blue'} transition`}>论文AI博客</button>
                <button onClick={() => onNavigate('community')} className={`text-lg font-semibold ${currentPage === 'community' ? 'text-brand-blue' : 'text-gray-600 hover:text-brand-blue'} transition`}>AI研讨社区</button>
            </div>
        </nav>
    </header>
);

const Sidebar = ({ activeFilters, onFilterChange, onClearFilters }) => (
    <aside className="w-64 flex-shrink-0">
        <div className="bg-white p-5 rounded-xl border border-gray-200">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2 text-brand-blue font-semibold">
                    <FilterIcon />
                    <span>智能筛选</span>
                </div>
                <button onClick={onClearFilters} className="text-sm px-3 py-1 bg-gray-100 rounded-md hover:bg-gray-200 transition">清除</button>
            </div>
            <div className="space-y-6">
                {filtersData.map(filterGroup => (
                    <div key={filterGroup.title}>
                        <h3 className="text-sm font-semibold text-gray-600 mb-3">{filterGroup.title}</h3>
                        <ul className="space-y-2">
                            {filterGroup.options.map(option => {
                                const isChecked = activeFilters[filterGroup.title]?.includes(option) || false;
                                return (
                                    <li key={option} className="flex items-center">
                                        <input 
                                            type={filterGroup.type}
                                            name={filterGroup.title} 
                                            id={option} 
                                            value={option}
                                            checked={isChecked}
                                            onChange={(e) => onFilterChange(filterGroup.title, option, e.target.checked)}
                                            className="h-4 w-4 text-brand-blue border-gray-300 rounded focus:ring-brand-blue" 
                                        />
                                        <label htmlFor={option} className="ml-2 text-sm text-gray-700">{option}</label>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </aside>
);

const PaperCard = ({ paper, onSelectPaper }) => {
    const [keywords, setKeywords] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    const tagColorClasses = {
      blue: 'bg-blue-50 text-blue-600 border border-blue-200',
      purple: 'bg-purple-50 text-purple-600 border border-purple-200',
      green: 'bg-green-50 text-green-600 border border-green-200',
      orange: 'bg-orange-50 text-orange-600 border border-orange-200',
      gray: 'bg-gray-100 text-gray-600 border border-gray-200',
    };

    React.useEffect(() => {
        const getKeywords = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const fetchedKeywords = await fetchKeywords(paper.id);
                setKeywords(fetchedKeywords as any[]);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setIsLoading(false);
            }
        };

        getKeywords();
    }, [paper.id]);

    const renderKeywords = () => {
        if (isLoading) {
            return (
                <div className="flex flex-wrap gap-2">
                    <div className="h-7 w-24 bg-gray-200 rounded-md animate-pulse"></div>
                    <div className="h-7 w-32 bg-gray-200 rounded-md animate-pulse"></div>
                    <div className="h-7 w-20 bg-gray-200 rounded-md animate-pulse"></div>
                </div>
            );
        }

        if (error) {
            return <p className="text-sm text-red-500">Failed to load keywords.</p>;
        }

        if (keywords.length === 0) {
            return <p className="text-sm text-gray-500">No keywords available.</p>;
        }

        return (
            <div className="flex flex-wrap gap-2">
                {keywords.map((tag: any) => (
                    <button key={tag.text} className={`px-3 py-1 text-sm rounded-md ${tagColorClasses[tag.color]}`}>
                        {tag.text}
                    </button>
                ))}
            </div>
        );
    };

    return (
        <article className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-300 cursor-pointer" onClick={() => onSelectPaper(paper)}>
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-600 font-bold text-sm flex-shrink-0">
                    {paper.source}
                </div>
                <div className="flex-1 mx-4">
                    <h2 className="text-lg font-bold text-gray-900 mb-2">{paper.title}</h2>
                    <p className="text-sm text-gray-600 leading-relaxed">{paper.abstract}</p>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500 flex-shrink-0">
                    <span className="flex items-center space-x-1"><ThumbsUpIcon /> <span>{paper.likes}</span></span>
                    <span className="flex items-center space-x-1"><CommentIcon /> <span>{paper.comments}</span></span>
                </div>
            </div>
            <div className="bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 p-4 rounded-lg min-h-[92px] flex flex-col justify-center">
                <p className="text-sm font-semibold text-gray-700 mb-3">🤖 AI 关键字</p>
                {renderKeywords()}
            </div>
        </article>
    );
};


const PaperList = ({ papers, onSelectPaper }) => (
    <main className="flex-1">
        <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">论文数据库</h1>
            <p className="text-gray-500">发现 <span className="text-brand-blue font-semibold">{papers.length}</span> 篇前沿沿论文</p>
        </div>
        <div className="space-y-6">
            {papers.length > 0 ? (
                papers.map(paper => <PaperCard key={paper.id} paper={paper} onSelectPaper={onSelectPaper} />)
            ) : (
                <div className="flex flex-col items-center justify-center text-center p-10 bg-white rounded-xl border border-gray-200">
                    <FileSadIcon />
                    <h3 className="mt-4 text-xl font-bold text-gray-800">未找到匹配的论文</h3>
                    <p className="mt-1 text-gray-500">请尝试调整或清除您的筛选条件。</p>
                </div>
            )}
        </div>
    </main>
);

const HomePage = ({ onSelectPaper, onNavigate, currentPage }) => {
    const [activeFilters, setActiveFilters] = React.useState({});

    const handleFilterChange = (groupTitle, option, isChecked) => {
        setActiveFilters(prevFilters => {
            const newFilters = { ...prevFilters };
            const currentGroupFilters = newFilters[groupTitle] ? [...newFilters[groupTitle]] : [];
            const filterType = filtersData.find(f => f.title === groupTitle)?.type;

            if (filterType === 'radio') {
                 newFilters[groupTitle] = [option];
            } else { // checkbox
                if (isChecked) {
                    if (!currentGroupFilters.includes(option)) {
                        currentGroupFilters.push(option);
                    }
                } else {
                    const index = currentGroupFilters.indexOf(option);
                    if (index > -1) {
                        currentGroupFilters.splice(index, 1);
                    }
                }
                
                if (currentGroupFilters.length > 0) {
                    newFilters[groupTitle] = currentGroupFilters;
                } else {
                    delete newFilters[groupTitle];
                }
            }
            return newFilters;
        });
    };

    const handleClearFilters = () => {
        setActiveFilters({});
    };

    const filteredPapers = React.useMemo(() => {
        const filterKeys = Object.keys(activeFilters);
        if (filterKeys.length === 0) {
            return papersWithKeywords;
        }
        
        const normalize = (str) => str.toLowerCase().replace(/[- ]/g, '');
        
        // Combine all checkbox filters into a single set for easier lookup
        const keywordFilters = new Set(
            [...(activeFilters['AI 标签'] || []), ...(activeFilters['AI 解读'] || [])].map(normalize)
        );

        return papersWithKeywords.filter(paper => {
            // Check radio button filters (e.g., source)
            const sourceFilter = activeFilters['论文来源'];
            if (sourceFilter && !sourceFilter.includes(paper.source)) {
                 return false;
            }

            // Check keyword-based filters
            if (keywordFilters.size > 0) {
                const paperKeywords = new Set(paper.keywords.map(kw => normalize(kw.text)));
                const hasMatch = [...keywordFilters].some(filterKeyword => paperKeywords.has(filterKeyword));
                if (!hasMatch) {
                    return false;
                }
            }
            
            return true;
        });

    }, [activeFilters]);

    return (
        <div className="bg-gray-50 min-h-screen">
            <Header onNavigate={onNavigate} currentPage={currentPage}/>
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    <Sidebar 
                        activeFilters={activeFilters}
                        onFilterChange={handleFilterChange}
                        onClearFilters={handleClearFilters}
                    />
                    <PaperList papers={filteredPapers} onSelectPaper={onSelectPaper} />
                </div>
            </div>
        </div>
    );
};

const PDFViewer = () => {
    const pdfUrl = 'https://arxiv.org/pdf/2509.08721v1';
    
    return (
        <section className="w-1/2 flex flex-col border-r border-gray-200">
            <header className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">PDF 预览</h2>
                <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm text-brand-blue hover:underline">
                    <ExternalLinkIcon />
                    <span>在新窗口打开</span>
                </a>
            </header>
            <div className="flex-1 bg-gray-100">
               <img src="https://storage.googleapis.com/aai-web-template-files/08272551-b28e-49be-86d7-1b22e11d617c" alt="Research paper content" className="w-full h-full object-contain" />
            </div>
        </section>
    );
};

const TechTag = ({ children }) => (
    <span className="bg-red-50 text-red-700 text-sm font-mono py-0.5 px-1.5 rounded-md border border-red-200">
        {children}
    </span>
);

const PaperInterpretationView = () => (
    <div className="flex-1 overflow-y-auto p-8 text-gray-800 leading-relaxed">
        <div className="max-w-full">
            <p className="mb-6">以下是对《Agentic Reinforcement Learning: A Comprehensive Survey》核心内容的系统梳理, 结合技术脉络、关键方法与前沿挑战进行结构化呈现:</p>
            
            <section className="space-y-4 mb-8">
                <h2 className="text-2xl font-bold border-b pb-2">一、核心概念与范式演进</h2>
                <h3 className="text-xl font-semibold">1. Agentic RL vs. 传统LLM-RL</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm border">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="p-3 font-semibold text-left border">维度</th>
                                <th className="p-3 font-semibold text-left border">传统LLM-RL</th>
                                <th className="p-3 font-semibold text-left border">Agentic RL</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            <tr>
                                <td className="p-3 border">任务形式</td>
                                <td className="p-3 border">单步决策 (如文本生成)</td>
                                <td className="p-3 border">长期序列决策 (POMDP)</td>
                            </tr>
                            <tr>
                                <td className="p-3 border">环境交互</td>
                                <td className="p-3 border">静态文本输入</td>
                                <td className="p-3 border">动态环境 (Web/机器人/仿真)</td>
                            </tr>
                            <tr>
                                <td className="p-3 border">核心能力</td>
                                <td className="p-3 border">语言生成与对齐</td>
                                <td className="p-3 border">规划、工具使用、记忆、自我改进</td>
                            </tr>
                            <tr>
                                <td className="p-3 border">优化目标</td>
                                <td className="p-3 border">输出质量 (如BLEU/奖励模型)</td>
                                <td className="p-3 border">任务完成度与环境适应性</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="text-xl font-semibold pt-4">2. 形式化定义</h3>
                {/* FIX: Replaced LaTeX-like syntax with Unicode characters to fix parsing errors and correctly render mathematical symbols. */}
                <p><strong className="font-semibold">MDP扩展:</strong> <code>(ℳ = (𝒮, 𝒜, P, R, γ))</code> 其中状态 (s_t) 包含环境观察、历史记忆、工具输出等部分可观测信息。</p>
                <p><strong className="font-semibold">关键挑战:</strong> 部分可观测性 (Partial Observability)、长时信用分配 (Credit Assignment)、稀疏奖励 (Sparse Rewards)。</p>
            </section>

            <section className="space-y-4 mb-8">
                <h2 className="text-2xl font-bold border-b pb-2">二、智能体核心能力与RL优化</h2>
                <ul className="space-y-3 list-disc list-inside">
                    <li><strong className="font-semibold">规划 (Planning):</strong> GRPO变体: 如 <TechTag>VLNR1</TechTag> (路径对齐奖励)、<TechTag>OctoNav-R1</TechTag> (内部推理强化)。</li>
                    <li><strong className="font-semibold">工具使用 (Tool Use):</strong> 奖励设计: <TechTag>ToolRL</TechTag> 用工具调用成功率+结果正确性作为奖励。</li>
                    <li><strong className="font-semibold">记忆 (Memory):</strong> 记忆检索优化: <TechTag>Memory-R1</TechTag> 用RL优化记忆写入/读取策略。</li>
                    <li><strong className="font-semibold">自我改进 (Self-Improvement):</strong> 自博弈: <TechTag>R-Zero</TechTag> 通过自我对弈生成训练数据, 无需人工标注。</li>
                </ul>
            </section>
            
            <section className="space-y-4 mb-8">
                <h2 className="text-2xl font-bold border-b pb-2">三、任务应用与代表性方法</h2>
                 <div className="overflow-x-auto">
                    <table className="w-full text-sm border">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="p-3 font-semibold text-left border">方法</th>
                                <th className="p-3 font-semibold text-left border">核心创新</th>
                                <th className="p-3 font-semibold text-left border">性能</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            <tr>
                                <td className="p-3 border"><TechTag>WebAgent-R1</TechTag></td>
                                <td className="p-3 border">端到端多轮RL训练</td>
                                <td className="p-3 border">WebArena成功率+15%</td>
                            </tr>
                            <tr>
                                <td className="p-3 border"><TechTag>MobileGUI-RL</TechTag></td>
                                <td className="p-3 border">Android虚拟设备轨迹感知GRPO</td>
                                <td className="p-3 border">任务完成效率提升2.3倍</td>
                            </tr>
                             <tr>
                                <td className="p-3 border"><TechTag>ComputerRL</TechTag></td>
                                <td className="p-3 border">异步多模交互框架</td>
                                <td className="p-3 border">OSWorld任务成功率58%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            
            <section className="space-y-4 mb-8">
                <h2 className="text-2xl font-bold border-b pb-2">六、结论</h2>
                <p><strong className="font-semibold">Agentic RL</strong>通过<strong className="font-semibold">强化学习驱动智能体能力进化</strong>,在规划、工具使用、自我改进等维度取得突破性进展。未来需重点解决:</p>
                <ul className="space-y-2 list-disc list-inside">
                    <li><strong className="font-semibold">安全对齐:</strong> 构建可信的Agent-环境交互协议。</li>
                    <li><strong className="font-semibold">高效训练:</strong> 发展低资源消耗的RL算法 (如离线RL)。</li>
                    <li><strong className="font-semibold">环境智能化:</strong> 实现任务生成、奖励设计的自动化闭环。</li>
                    <li><strong className="font-semibold">跨模态协同:</strong> 统一语言、视觉、动作的联合优化框架。</li>
                </ul>
                <div className="mt-6 border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
                    <h4 className="font-bold text-green-800">核心洞察</h4>
                    <p className="text-green-700">RL不仅是优化工具, 更是智能体从<strong className="font-semibold">被动响应</strong>到<strong className="font-semibold">主动进化</strong>的关键引擎。随着环境动态性增强与多智能体协作深化, Agentic RL有望成为通用人工智能 (AGI) 的核心范式之一。</p>
                </div>
            </section>
        </div>
    </div>
);

const PlaceholderView = ({ title, description }) => (
    <div className="flex-1 flex flex-col items-center justify-center text-center p-6 bg-gray-50">
        <FileSadIcon />
        <h4 className="text-xl font-bold text-gray-800 mt-4">{title}</h4>
        <p className="text-gray-500 mt-1">{description}</p>
    </div>
);

const ChatInterface = ({ paper }) => {
    const [activeTab, setActiveTab] = React.useState('qa');

    return (
        <section className="w-1/2 flex flex-col">
            <header className="p-3 border-b border-gray-200">
                <div className="flex space-x-2">
                    <button 
                        onClick={() => setActiveTab('interpretation')}
                        className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${activeTab === 'interpretation' ? 'text-white bg-brand-blue' : 'text-gray-600 bg-gray-100 hover:bg-gray-200'}`}
                    >
                        AI 论文解读
                    </button>
                    <button 
                         onClick={() => setActiveTab('qa')}
                         className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${activeTab === 'qa' ? 'text-white bg-brand-blue' : 'text-gray-600 bg-gray-100 hover:bg-gray-200'}`}
                    >
                        AI 问答
                    </button>
                    <button 
                        onClick={() => setActiveTab('translate')}
                        className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${activeTab === 'translate' ? 'text-white bg-brand-blue' : 'text-gray-600 bg-gray-100 hover:bg-gray-200'}`}
                    >
                        AI翻译
                    </button>
                     <button 
                        onClick={() => setActiveTab('in-depth')}
                        className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${activeTab === 'in-depth' ? 'text-white bg-brand-blue' : 'text-gray-600 bg-gray-100 hover:bg-gray-200'}`}
                    >
                        AI精读
                    </button>
                </div>
            </header>
            
            {activeTab === 'interpretation' ? (
                <PaperInterpretationView />
            ) : activeTab === 'qa' ? (
                <div className="flex-1 flex overflow-hidden">
                    <aside className="w-2/5 border-r border-gray-200 p-4 overflow-y-auto">
                        <div className="flex items-center space-x-2 text-gray-600 mb-4">
                            <InfoIcon />
                            <span className="font-semibold">常见问题</span>
                        </div>
                        <div className="relative">
                            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 to-purple-300 rounded-full"></div>
                            <div className="space-y-2 pl-4">
                                {suggestedQuestions.map((q, i) => (
                                    <button key={i} className="w-full text-left p-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition">
                                        {q}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>
                    <main className="w-3/5 flex flex-col p-6">
                        <div className="flex-1 flex flex-col items-center justify-center text-center">
                            <MessageIcon />
                            <h4 className="text-xl font-bold text-gray-800 mt-4">开始与 AI 讨论这篇论文吧!</h4>
                            <p className="text-gray-500 mt-1">你可以询问论文的核心观点、方法论、实验结果等</p>
                            <p className="text-sm text-gray-500 mt-2">👆 点击左侧常见问题快速开始</p>
                        </div>
                        <div className="relative mt-4">
                            <textarea className="w-full p-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:outline-none resize-none" rows={1} placeholder="输入你的问题..."></textarea>
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-brand-blue rounded-full hover:bg-light-blue transition">
                                <SendIcon />
                            </button>
                        </div>
                    </main>
                </div>
            ) : activeTab === 'translate' ? (
                 <PlaceholderView
                    title="AI 翻译功能正在开发中"
                    description="敬请期待，我们将很快为您带来精准的论文翻译服务。"
                />
            ) : (
                 <PlaceholderView
                    title="AI 精读功能即将上线"
                    description="深入解读论文的每一个细节，敬请期待。"
                />
            )}
        </section>
    );
};


const PaperDetailView = ({ paper, onBack }) => (
    <div className="h-screen flex flex-col bg-white">
        <header className="flex-shrink-0 border-b border-gray-200">
            <div className="max-w-screen-xl mx-auto p-4">
                 <button onClick={onBack} className="flex items-center space-x-2 text-sm text-gray-600 hover:text-brand-blue transition">
                    <ArrowLeftIcon />
                    <span>返回首页</span>
                </button>
            </div>
        </header>
        <main className="flex-1 flex overflow-hidden">
            <PDFViewer />
            <ChatInterface paper={paper} />
        </main>
    </div>
);

const CommunityPage = ({ onNavigate, currentPage }) => {
    const [activeCategory, setActiveCategory] = React.useState('所有文章');
    
    return (
        <div className="bg-white min-h-screen">
            <Header onNavigate={onNavigate} currentPage={currentPage} />
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-4xl font-black text-gray-900">帖子、文章和讨论</h1>
                     <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-2 bg-blue-50 text-brand-blue px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 transition border border-gray-200">
                            <NewArticleIcon />
                            <span>New Article</span>
                        </button>
                        <button className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition">
                            <SearchIcon />
                        </button>
                    </div>
                </div>

                <div className="flex items-center space-x-2 border-b border-gray-200 mb-6 overflow-x-auto pb-2">
                    {communityCategories.map(category => (
                        <button 
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-md text-sm font-semibold whitespace-nowrap transition ${
                                activeCategory === category 
                                ? 'bg-gray-900 text-white' 
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="mt-8">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-bold text-gray-800">👋 Community Articles</h3>
                         <button className="flex items-center space-x-2 text-sm text-gray-600 px-3 py-1.5 border border-gray-300 rounded-md hover:bg-gray-100 transition">
                            <SortIcon />
                            <span>Sort: Trending</span>
                        </button>
                    </div>
                    <div className="space-y-4">
                       {communityArticlesData.map(article => (
                           <div key={article.id} className="p-4 rounded-lg border border-gray-200 bg-gray-50/50">
                               <h4 className="font-semibold text-gray-800 hover:text-brand-blue transition cursor-pointer">{article.title}</h4>
                               <div className="text-xs text-gray-500 mt-2 flex items-center space-x-2">
                                   <span>By {article.author}</span>
                                   <span>•</span>
                                   <span>{article.time}</span>
                                   <span>•</span>
                                   <span className="flex items-center space-x-1">
                                       <UpvoteIcon />
                                       <span>{article.upvotes}</span>
                                   </span>
                               </div>
                           </div>
                       ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const UnderDevelopmentPage = ({ onNavigate, currentPage, featureName }) => (
    <div className="bg-gray-50 min-h-screen">
        <Header onNavigate={onNavigate} currentPage={currentPage} />
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-center" style={{ minHeight: 'calc(100vh - 64px)'}}>
            <div className="text-center">
                <WrenchScrewdriverIcon />
                <h1 className="text-2xl font-bold text-gray-800 mt-6">该“{featureName}”功能正在开发中</h1>
                <p className="text-gray-500 mt-2">我们正在努力构建中，敬请期待！</p>
            </div>
        </div>
    </div>
);

// --- Main App Component ---

const App = () => {
    const [currentPage, setCurrentPage] = React.useState('home');
    const [selectedPaper, setSelectedPaper] = React.useState(null);

    const handleSelectPaper = (paper) => {
        setSelectedPaper(paper);
    };

    const handleBack = () => {
        setSelectedPaper(null);
    };

    const handleNavigate = (page) => {
        setSelectedPaper(null);
        setCurrentPage(page);
    };

    if (selectedPaper) {
        return <PaperDetailView paper={selectedPaper} onBack={handleBack} />;
    }

    if (currentPage === 'research') {
        return <UnderDevelopmentPage onNavigate={handleNavigate} currentPage={currentPage} featureName="AI深度研究" />;
    }

    if (currentPage === 'search') {
        return <UnderDevelopmentPage onNavigate={handleNavigate} currentPage={currentPage} featureName="智能搜索" />;
    }

    if (currentPage === 'knowledge-graph') {
        return <UnderDevelopmentPage onNavigate={handleNavigate} currentPage={currentPage} featureName="AI知识图谱" />;
    }

    if (currentPage === 'blog') {
        return <UnderDevelopmentPage onNavigate={handleNavigate} currentPage={currentPage} featureName="论文AI博客" />;
    }

    if (currentPage === 'community') {
        return <CommunityPage onNavigate={handleNavigate} currentPage={currentPage} />;
    }

    return <HomePage onSelectPaper={handleSelectPaper} onNavigate={handleNavigate} currentPage={currentPage} />;
};

// --- Render Logic ---

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
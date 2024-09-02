import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  'en-US': {
    translation: {
      common: {
        avatar: 'Avatar',
        language: 'Language',
        model: 'Model',
        models: 'Models',
        topics: 'Topics',
        docs: 'Docs',
        and: 'and',
        assistant: 'Assistant',
        name: 'Name',
        description: 'Description',
        prompt: 'Prompt',
        rename: 'Rename',
        delete: 'Delete',
        edit: 'Edit',
        duplicate: 'Duplicate',
        copy: 'Copy',
        regenerate: 'Regenerate',
        provider: 'Provider',
        you: 'You',
        save: 'Save',
        footnotes: 'References',
        select: 'Select',
        search: 'Search',
        default: 'Default',
        warning: 'Warning'
      },
      button: {
        add: 'Add',
        added: 'Added',
        manage: 'Manage',
        select_model: 'Select Model'
      },
      message: {
        copied: 'Copied!',
        'assistant.added.content': 'Assistant added successfully',
        'message.delete.title': 'Delete Message',
        'message.delete.content': 'Are you sure you want to delete this message?',
        'error.enter.api.key': 'Please enter your API key first',
        'error.enter.api.host': 'Please enter your API host first',
        'error.enter.model': 'Please select a model first',
        'error.invalid.proxy.url': 'Invalid proxy URL',
        'api.connection.failed': 'Connection failed',
        'api.connection.success': 'Connection successful',
        'chat.completion.paused': 'Chat completion paused',
        'switch.disabled': 'Switching is disabled while the assistant is generating',
        'restore.success': 'Restored successfully',
        'reset.confirm.content': 'Are you sure you want to clear all data?',
        'reset.double.confirm.title': 'DATA LOST !!!',
        'reset.double.confirm.content': 'All data will be lost, do you want to continue?'
      },
      chat: {
        save: 'Save',
        'default.name': 'Default Assistant',
        'default.description': "Hello, I'm Default Assistant. You can start chatting with me right away",
        'default.topic.name': 'Default Topic',
        'topics.title': 'Topics',
        'topics.auto_rename': 'Auto Rename',
        'topics.edit.title': 'Rename',
        'topics.edit.placeholder': 'Enter new name',
        'topics.delete.all.title': 'Delete all topics',
        'topics.delete.all.content': 'Are you sure you want to delete all topics?',
        'input.new_topic': 'New Topic',
        'input.topics': ' Topics ',
        'input.clear': 'Clear',
        'input.clear.title': 'Clear all messages?',
        'input.clear.content': 'Are you sure to clear all messages?',
        'input.placeholder': 'Type your message here...',
        'input.send': 'Send',
        'input.pause': 'Pause',
        'input.settings': 'Settings',
        'input.upload': 'Upload image png、jpg、jpeg',
        'input.context_count.tip': 'Context Count',
        'input.estimated_tokens.tip': 'Estimated tokens',
        'settings.temperature': 'Temperature',
        'settings.temperature.tip':
          'Lower values make the model more creative and unpredictable, while higher values make it more deterministic and precise.',
        'settings.conext_count': 'Context',
        'settings.conext_count.tip': 'The number of previous messages to keep in the context.',
        'settings.max_tokens': 'Enable Max Tokens Limit',
        'settings.max_tokens.tip':
          'The maximum number of tokens the model can generate. Normal chat suggests 500-800. Short text generation suggests 800-2000. Code generation suggests 2000-3600. Long text generation suggests above 4000.',
        'settings.reset': 'Reset',
        'settings.set_as_default': 'Apply to default assistant',
        'settings.max': 'Max',
        'suggestions.title': 'Suggested Questions',
        'add.assistant.title': 'Add Assistant'
      },
      agents: {
        title: 'Agents',
        my_agents: 'My Agents',
        'add.title': 'Add Agent',
        'edit.title': 'Edit Agent',
        'add.name': 'Name',
        'add.name.placeholder': 'Enter name',
        'add.prompt': 'Prompt',
        'add.prompt.placeholder': 'Enter prompt',
        'add.button': 'Add',
        'manage.title': 'Manage Agents',
        'delete.popup.content': 'Are you sure you want to delete this agent?',
        'tag.default': 'Default',
        'tag.system': 'System',
        'tag.user': 'Mine'
      },
      provider: {
        openai: 'OpenAI',
        gemini: 'Gemini',
        deepseek: 'DeepSeek',
        moonshot: 'Moonshot',
        silicon: 'SiliconFlow',
        openrouter: 'OpenRouter',
        yi: 'Yi',
        zhipu: 'ZHIPU AI',
        groq: 'Groq',
        ollama: 'Ollama',
        baichuan: 'Baichuan',
        dashscope: 'DashScope',
        anthropic: 'Anthropic',
        aihubmix: 'AiHubMix',
        stepfun: 'StepFun',
        doubao: 'Doubao',
        minimax: 'MiniMax',
        'graphrag-kylin-mountain': 'GraphRAG'
      },
      settings: {
        title: 'Settings',
        general: 'General Settings',
        provider: 'Model Provider',
        model: 'Default Model',
        assistant: 'Default Assistant',
        about: 'About & Feedback',
        'messages.model.title': 'Model Settings',
        'messages.title': 'Message Settings',
        'messages.divider': 'Show divider between messages',
        'messages.use_serif_font': 'Use serif font',
        'messages.input.title': 'Input Settings',
        'messages.input.show_estimated_tokens': 'Show estimated input tokens',
        'messages.input.send_shortcuts': 'Send shortcuts',
        'general.title': 'General Settings',
        'general.user_name': 'User Name',
        'general.user_name.placeholder': 'Enter your name',
        'general.backup.title': 'Data Backup and Recovery',
        'general.reset.title': 'Data Reset',
        'general.reset.button': 'Reset',
        'provider.api_key': 'API Key',
        'provider.check': 'Check',
        'provider.get_api_key': 'Get API Key',
        'provider.api_host': 'API Host',
        'provider.docs_check': 'Check',
        'provider.docs_more_details': 'for more details',
        'provider.search_placeholder': 'Search model id or name',
        'provider.api.url.reset': 'Reset',
        'models.default_assistant_model': 'Default Assistant Model',
        'models.topic_naming_model': 'Topic Naming Model',
        'models.translate_model': 'Translate Model',
        'models.add.add_model': 'Add Model',
        'models.add.model_id.placeholder': 'Required e.g. gpt-3.5-turbo',
        'models.add.model_id': 'Model ID',
        'models.add.model_id.tooltip': 'Example: gpt-3.5-turbo',
        'models.add.model_name': 'Model Name',
        'models.add.model_name.placeholder': 'Optional e.g. GPT-4',
        'models.add.group_name': 'Group Name',
        'models.add.group_name.tooltip': 'Optional e.g. ChatGPT',
        'models.add.group_name.placeholder': 'Optional e.g. ChatGPT',
        'models.empty': 'No models found',
        'assistant.title': 'Default Assistant',
        'assistant.model_params': 'Model Parameters',
        'about.description': 'A powerful AI assistant for producer',
        'about.updateNotAvailable': 'You are using the latest version',
        'about.checkingUpdate': 'Checking for updates...',
        'about.updateError': 'Update error',
        'about.checkUpdate': 'Check Update',
        'about.downloading': 'Downloading...',
        'provider.delete.title': 'Delete Provider',
        'provider.delete.content': 'Are you sure you want to delete this provider?',
        'provider.edit.name': 'Provider Name',
        'provider.edit.name.placeholder': 'Example: OpenAI',
        'about.title': 'About',
        'about.releases.title': 'Release Notes',
        'about.releases.button': 'Releases',
        'about.website.title': 'Official Website',
        'about.website.button': 'Website',
        'about.feedback.title': 'Feedback',
        'about.feedback.button': 'Feedback',
        'about.contact.title': 'Contact',
        'about.license.title': 'License',
        'about.license.button': 'License',
        'about.contact.button': 'Email',
        'proxy.title': 'Proxy Address',
        'theme.title': 'Theme',
        'theme.dark': 'Dark',
        'theme.light': 'Light',
        'theme.auto': 'Auto',
        'font_size.title': 'Message Font Size'
      },
      translate: {
        title: 'Translation',
        'any.language': 'Any language',
        'button.translate': 'Translate',
        'error.not_configured': 'Translation model is not configured',
        'input.placeholder': 'Enter text to translate',
        'output.placeholder': 'Translation'
      },
      languages: {
        english: 'English',
        chinese: 'Chinese',
        'chinese-traditional': 'Traditional Chinese',
        japanese: 'Japanese',
        korean: 'Korean',
        russian: 'Russian',
        spanish: 'Spanish',
        french: 'French',
        italian: 'Italian',
        portuguese: 'Portuguese',
        arabic: 'Arabic'
      },
      ollama: {
        title: 'Ollama',
        'keep_alive_time.title': 'Keep Alive Time',
        'keep_alive_time.placeholder': 'Minutes',
        'keep_alive_time.description': 'The time in minutes to keep the connection alive, default is 5 minutes.'
      },
      minapp: {
        title: 'MinApp'
      },
      error: {
        'chat.response': 'Something went wrong. Please check if you have set your API key in the Settings > Providers',
        'backup.file_format': 'Backup file format error'
      },
      words: {
        knowledgeGraph: 'Knowledge Graph',
        visualization: 'Visualization'
      }
    }
  },
  'zh-CN': {
    translation: {
      common: {
        avatar: '头像',
        language: '语言',
        model: '模型',
        models: '模型',
        topics: '话题',
        docs: '文档',
        and: '和',
        assistant: '智能体',
        name: '名称',
        description: '描述',
        prompt: '提示词',
        rename: '重命名',
        delete: '删除',
        edit: '编辑',
        duplicate: '复制',
        copy: '复制',
        regenerate: '重新生成',
        provider: '提供商',
        you: '用户',
        footnote: '引用内容',
        select: '选择',
        search: '搜索',
        default: '默认',
        warning: '警告'
      },
      button: {
        add: '添加',
        added: '已添加',
        manage: '管理',
        select_model: '选择模型'
      },
      message: {
        copied: '已复制',
        'assistant.added.content': '智能体添加成功',
        'message.delete.title': '删除消息',
        'message.delete.content': '确定要删除此消息吗?',
        'error.enter.api.key': '请输入您的 API 密钥',
        'error.enter.api.host': '请输入您的 API 地址',
        'error.enter.model': '请选择一个模型',
        'error.invalid.proxy.url': '无效的代理地址',
        'api.connection.failed': '连接失败',
        'api.connection.success': '连接成功',
        'chat.completion.paused': '会话已停止',
        'switch.disabled': '模型回复完成后才能切换',
        'restore.success': '恢复成功',
        'reset.confirm.content': '确定要重置所有数据吗？',
        'reset.double.confirm.title': '数据丢失！！！',
        'reset.double.confirm.content': '你的全部数据都会丢失，如果没有备份数据，将无法恢复，确定要继续吗？'
      },
      chat: {
        save: '保存',
        'default.name': '默认助手',
        'default.description': '你好，我是默认助手。你可以立刻开始跟我聊天。',
        'default.topic.name': '默认话题',
        'topics.title': '话题',
        'topics.auto_rename': '生成话题名',
        'topics.edit.title': '编辑话题名',
        'topics.edit.placeholder': '输入新名称',
        'topics.delete.all.title': '删除所有话题',
        'topics.delete.all.content': '确定要删除所有话题吗?',
        'input.new_topic': '新话题',
        'input.topics': ' 话题 ',
        'input.clear': '清除',
        'input.clear.title': '清除所有消息?',
        'input.clear.content': '确定要清除所有消息吗?',
        'input.placeholder': '在这里输入消息...',
        'input.send': '发送',
        'input.pause': '暂停',
        'input.settings': '设置',
        'input.upload': '上传图片 png、jpg、jpeg',
        'input.context_count.tip': '上下文数',
        'input.estimated_tokens.tip': '预估 token 数',
        'settings.temperature': '模型温度',
        'settings.temperature.tip':
          '模型生成文本的随机程度。值越大，回复内容越赋有多样性、创造性、随机性；设为 0 根据事实回答。日常聊天建议设置为 0.7',
        'settings.conext_count': '上下文数',
        'settings.conext_count.tip':
          '要保留在上下文中的消息数量，数值越大，上下文越长，消耗的 token 越多。普通聊天建议 5-10',
        'settings.max_tokens': '开启消息长度限制',
        'settings.max_tokens.tip':
          '单次交互所用的最大 Token 数, 会影响返回结果的长度。普通聊天建议 500-800；短文生成建议 800-2000；代码生成建议 2000-3600；长文生成建议切换模型到 4000 左右',
        'settings.reset': '重置',
        'settings.set_as_default': '应用到默认助手',
        'settings.max': '不限',
        'suggestions.title': '建议的问题',
        'add.assistant.title': '添加智能体'
      },
      agents: {
        title: '智能体',
        my_agents: '我的智能体',
        'add.title': '添加智能体',
        'edit.title': '编辑智能体',
        'add.name': '名称',
        'add.name.placeholder': '输入名称',
        'add.prompt': '提示词',
        'add.prompt.placeholder': '输入提示词',
        'add.button': '添加',
        'manage.title': '管理智能体',
        'delete.popup.content': '确定要删除此智能体吗？',
        'tag.default': '默认',
        'tag.system': '系统',
        'tag.user': '我的'
      },
      provider: {
        openai: 'OpenAI',
        gemini: 'Gemini',
        deepseek: '深度求索',
        moonshot: '月之暗面',
        silicon: '硅基流动',
        openrouter: 'OpenRouter',
        yi: '零一万物',
        zhipu: '智谱AI',
        groq: 'Groq',
        ollama: 'Ollama',
        baichuan: '百川',
        dashscope: '阿里云灵积',
        anthropic: 'Anthropic',
        aihubmix: 'AiHubMix',
        stepfun: '阶跃星辰',
        doubao: '豆包',
        minimax: 'MiniMax',
        'graphrag-kylin-mountain': 'GraphRAG'
      },
      settings: {
        title: '设置',
        general: '常规设置',
        provider: '模型服务',
        model: '默认模型',
        assistant: '默认助手',
        about: '关于我们',
        'messages.model.title': '模型设置',
        'messages.title': '消息设置',
        'messages.divider': '消息分割线',
        'messages.use_serif_font': '使用衬线字体',
        'messages.input.title': '输入设置',
        'messages.input.show_estimated_tokens': '状态显示',
        'messages.input.send_shortcuts': '发送快捷键',
        'general.title': '常规设置',
        'general.user_name': '用户名',
        'general.user_name.placeholder': '请输入用户名',
        'general.backup.title': '数据备份与恢复',
        'general.reset.title': '重置数据',
        'general.reset.button': '重置',
        'provider.api_key': 'API 密钥',
        'provider.check': '检查',
        'provider.get_api_key': '点击这里获取密钥',
        'provider.api_host': 'API 地址',
        'provider.docs_check': '查看',
        'provider.docs_more_details': '获取更多详情',
        'provider.search_placeholder': '搜索模型 ID 或名称',
        'provider.api.url.reset': '重置',
        'models.default_assistant_model': '默认助手模型',
        'models.topic_naming_model': '话题命名模型',
        'models.translate_model': '翻译模型',
        'models.add.add_model': '添加模型',
        'models.add.model_id.placeholder': '必填 例如 gpt-3.5-turbo',
        'models.add.model_id': '模型 ID',
        'models.add.model_id.tooltip': '例如 gpt-3.5-turbo',
        'models.add.model_name': '模型名称',
        'models.add.model_name.placeholder': '例如 GPT-3.5',
        'models.add.group_name': '分组名称',
        'models.add.group_name.tooltip': '例如 ChatGPT',
        'models.add.group_name.placeholder': '例如 ChatGPT',
        'models.empty': '没有模型',
        'assistant.title': '默认助手',
        'assistant.model_params': '模型参数',
        'about.description': '一款为创造者而生的 AI 助手',
        'about.updateNotAvailable': '你的软件已是最新版本',
        'about.checkingUpdate': '正在检查更新...',
        'about.updateError': '更新出错',
        'about.checkUpdate': '检查更新',
        'about.downloading': '正在下载更新...',
        'provider.delete.title': '删除提供商',
        'provider.delete.content': '确定要删除此模型提供商吗?',
        'provider.edit.name': '模型提供商名称',
        'provider.edit.name.placeholder': '例如 OpenAI',
        'about.title': '关于我们',
        'about.releases.title': '更新日志',
        'about.releases.button': '查看',
        'about.website.title': '官方网站',
        'about.website.button': '查看',
        'about.feedback.title': '意见反馈',
        'about.feedback.button': '反馈',
        'about.contact.title': '邮件联系',
        'about.license.title': '许可证',
        'about.license.button': '查看',
        'about.contact.button': '邮件',
        'proxy.title': '代理地址',
        'theme.title': '主题',
        'theme.dark': '深色主题',
        'theme.light': '浅色主题',
        'theme.auto': '跟随系统',
        'font_size.title': '消息字体大小'
      },
      translate: {
        title: '翻译',
        'any.language': '任意语言',
        'button.translate': '翻译',
        'error.not_configured': '翻译模型未配置',
        'input.placeholder': '输入文本进行翻译',
        'output.placeholder': '翻译'
      },
      languages: {
        english: '英文',
        chinese: '简体中文',
        'chinese-traditional': '繁体中文',
        japanese: '日文',
        korean: '韩文',
        russian: '俄文',
        spanish: '西班牙文',
        french: '法文',
        italian: '意大利文',
        portuguese: '葡萄牙文',
        arabic: '阿拉伯文'
      },
      ollama: {
        title: 'Ollama',
        'keep_alive_time.title': '保持活跃时间',
        'keep_alive_time.placeholder': '分钟',
        'keep_alive_time.description': '对话后模型在内存中保持的时间（默认：5分钟）'
      },
      minapp: {
        title: '小程序'
      },
      error: {
        'chat.response': '出错了，如果没有配置 API 密钥，请前往设置 > 模型提供商中配置密钥',
        'backup.file_format': '备份文件格式错误'
      },
      words: {
        knowledgeGraph: '知识图谱',
        visualization: '可视化'
      }
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || navigator.language || 'en-US',
  fallbackLng: 'en-US',
  interpolation: {
    escapeValue: false
  }
})

export default i18n

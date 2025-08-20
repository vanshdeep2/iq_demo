import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Send, Check, Edit, Flag, HelpCircle } from 'lucide-react';
import ActionCard from '../components/ActionCard';

const InsightPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { type: 'bot', message: 'Hello! I can help you understand this insight better. What would you like to know?' }
  ]);

  // Insight-specific chat suggestions
  const getInsightSuggestions = (insightId) => {
    const suggestions = {
      1: [ // Call handling time
        'What caused the 23% increase in call handling time?',
        'How can we reduce call handling time?',
        'Which agents are most affected by this trend?',
        'What training would help improve efficiency?'
      ],
      2: [ // Customer satisfaction
        'Why did customer satisfaction drop in technical support?',
        'What specific issues are customers complaining about?',
        'How can we improve the technical support experience?',
        'Which agents have the best satisfaction scores?'
      ],
      3: [ // AI resolution rate
        'What types of queries does AI handle best?',
        'How can we improve AI resolution rates further?',
        'Which queries still require human escalation?',
        'What training data would help the AI?'
      ],
      4: [ // Password reset issue
        'Why are password resets so common?',
        'How can we reduce password reset calls?',
        'What self-service options would help?',
        'Are there specific user groups with more issues?'
      ],
      5: [ // Agent burnout
        'What are the main causes of agent stress?',
        'How can we better support agents?',
        'Which teams are most affected by burnout?',
        'What resources would help reduce stress?'
      ],
      6: [ // Email response time
        'How has AI improved email response times?',
        'Which email categories are handled fastest?',
        'What other email processes could be automated?',
        'How can we improve email template quality?'
      ],
      7: [ // Chat abandonment
        'Why do customers abandon chats during peak hours?',
        'How can we improve chat response times?',
        'What staffing changes would help?',
        'Are there technical issues affecting chat?'
      ],
      8: [ // Product defects
        'What types of defects are most common?',
        'How can we prevent similar defects?',
        'Which products have the most issues?',
        'What testing improvements are needed?'
      ]
    };
    return suggestions[insightId] || suggestions[1];
  };

  const insightSuggestions = getInsightSuggestions(parseInt(id));

  // Mock data for the insight based on ID
  const getInsightData = (id) => {
    const insightsData = {
      1: {
        id: 1,
        title: 'Average call handling time increased by 23% this month',
        category: 'Operational',
        confidence: 'High',
        impact: 'High',
        overview: 'Call handling time has significantly increased from 4.2 to 5.1 minutes, primarily due to complex technical issues and longer resolution times for product defects. This trend indicates potential operational inefficiencies that need immediate attention.',
        contributingFactors: [
          'Complex technical issue resolution taking longer',
          'Product defect cases requiring multiple escalations',
          'Insufficient agent training on new product features',
          'Increased complexity of customer queries'
        ],
        supportingEvidence: [
          'Average resolution time for technical issues: 8.3 minutes (up from 6.1)',
          'Escalation rate increased to 34% (up from 28%)',
          'Customer complaints about long wait times increased 45%'
        ],
        dataSources: [
          'Call center transcripts (October 2023)',
          'Agent performance metrics',
          'Customer satisfaction surveys',
          'Call duration analytics'
        ]
      },
      2: {
        id: 2,
        title: 'Customer satisfaction scores dropped 12% in technical support',
        category: 'Customer',
        confidence: 'High',
        impact: 'High',
        overview: 'Customer satisfaction scores in technical support have decreased from 4.3 to 3.8, with customers citing long wait times and unresolved issues as primary concerns. This decline requires immediate intervention to prevent further customer churn.',
        contributingFactors: [
          'Long wait times during peak hours',
          'Unresolved technical issues',
          'Poor communication during complex problem resolution',
          'Inconsistent solution quality across agents'
        ],
        supportingEvidence: [
          'CSAT scores dropped from 4.3 to 3.8 in technical support',
          'Customer complaints about unresolved issues up 67%',
          'Negative feedback mentions "long wait times" 89% of the time'
        ],
        dataSources: [
          'Customer satisfaction surveys',
          'Call transcripts analysis',
          'Customer feedback forms',
          'Support ticket resolution data'
        ]
      },
      3: {
        id: 3,
        title: 'AI agent resolution rate improved to 78% for simple queries',
        category: 'AI Performance',
        confidence: 'Medium',
        impact: 'Medium',
        overview: 'AI agents have successfully improved their resolution rate to 78% for simple customer queries without human escalation, up from 65% last quarter. This improvement demonstrates the effectiveness of recent AI training and optimization.',
        contributingFactors: [
          'Enhanced AI training on common query patterns',
          'Improved natural language processing capabilities',
          'Better integration with knowledge base systems',
          'Optimized escalation triggers and thresholds'
        ],
        supportingEvidence: [
          'AI resolution rate improved from 65% to 78%',
          'Human escalation rate decreased by 18%',
          'Average AI response time: 1.2 seconds (down from 2.1)',
          'Customer satisfaction with AI interactions: 4.1/5'
        ],
        dataSources: [
          'AI interaction logs',
          'Escalation rate analytics',
          'Customer feedback on AI interactions',
          'AI performance metrics'
        ]
      },
      4: {
        id: 4,
        title: 'Top customer issue: "Password reset" accounts for 34% of calls',
        category: 'Customer Issues',
        confidence: 'High',
        impact: 'Medium',
        overview: 'Password reset requests dominate customer interactions, accounting for 34% of all incoming calls. This high volume suggests a need for improved self-service options or simplified authentication processes to reduce support burden.',
        contributingFactors: [
          'Complex password requirements causing frequent lockouts',
          'Lack of intuitive self-service password reset options',
          'Multi-factor authentication setup confusion',
          'Account security policies requiring frequent password changes'
        ],
        supportingEvidence: [
          'Password reset calls: 34% of total volume',
          'Self-service password reset usage: only 23%',
          'Average password reset call duration: 3.2 minutes',
          'Customer frustration mentions: 67% of password reset calls'
        ],
        dataSources: [
          'Call transcripts analysis',
          'Support ticket categorization',
          'Self-service portal analytics',
          'Customer interaction logs'
        ]
      },
      5: {
        id: 5,
        title: 'Agent burnout indicators: 45% report high stress levels',
        category: 'Agent Wellbeing',
        confidence: 'Medium',
        impact: 'High',
        overview: 'Survey data indicates that 45% of agents report high stress levels, with peak stress occurring during technical issue escalations and angry customer interactions. This trend requires immediate attention to prevent turnover and maintain service quality.',
        contributingFactors: [
          'High volume of angry customer interactions',
          'Complex technical escalations without proper support',
          'Insufficient breaks and recovery time',
          'Lack of mental health support resources'
        ],
        supportingEvidence: [
          '45% of agents report high stress levels',
          'Agent turnover rate increased to 18% (up from 12%)',
          'Sick days due to stress: 23% increase',
          'Agent satisfaction scores dropped to 3.2/5'
        ],
        dataSources: [
          'Agent wellbeing surveys',
          'HR turnover analytics',
          'Attendance and sick leave records',
          'Agent satisfaction surveys'
        ]
      },
      6: {
        id: 6,
        title: 'Email response time improved by 18% with AI assistance',
        category: 'AI Performance',
        confidence: 'High',
        impact: 'Medium',
        overview: 'Average email response time has decreased from 4.2 hours to 3.4 hours with the implementation of AI-powered response suggestions and automated categorization. This improvement enhances customer experience and reduces agent workload.',
        contributingFactors: [
          'AI-powered response suggestions',
          'Automated email categorization and routing',
          'Improved email template system',
          'Better workload distribution algorithms'
        ],
        supportingEvidence: [
          'Email response time decreased from 4.2 to 3.4 hours',
          'AI response suggestions used in 67% of emails',
          'Email categorization accuracy: 89%',
          'Customer satisfaction with email support: 4.3/5'
        ],
        dataSources: [
          'Email support analytics',
          'AI response suggestion logs',
          'Customer satisfaction surveys',
          'Email response time metrics'
        ]
      },
      7: {
        id: 7,
        title: 'Chat abandonment rate spiked to 28% during peak hours',
        category: 'Operational',
        confidence: 'High',
        impact: 'Medium',
        overview: 'Chat abandonment rate has increased from 18% to 28% during 2-4 PM peak hours, indicating insufficient staffing or slow response times during high-traffic periods. This trend suggests the need for better resource allocation.',
        contributingFactors: [
          'Insufficient staffing during peak hours',
          'Slow initial response times',
          'High chat volume overwhelming available agents',
          'Technical issues with chat platform during peak times'
        ],
        supportingEvidence: [
          'Chat abandonment rate: 18% to 28% during peak hours',
          'Average initial response time: 2.3 minutes (up from 1.1)',
          'Peak hour chat volume: 45% increase',
          'Agent availability during peak hours: 67% (down from 85%)'
        ],
        dataSources: [
          'Chat interaction logs',
          'Agent availability schedules',
          'Chat platform analytics',
          'Peak hour traffic analysis'
        ]
      },
      8: {
        id: 8,
        title: 'Product defect reports increased 67% after software update',
        category: 'Product Issues',
        confidence: 'High',
        impact: 'High',
        overview: 'Customer reports of software bugs and defects have increased significantly by 67% following the latest product update. This surge requires immediate attention from the development team to prevent further customer dissatisfaction.',
        contributingFactors: [
          'Recent software update introduced new bugs',
          'Insufficient testing before release',
          'Compatibility issues with existing customer systems',
          'Inadequate rollback procedures'
        ],
        supportingEvidence: [
          'Product defect reports increased by 67%',
          'Critical bug reports: 23% of total issues',
          'Customer frustration mentions: 89% of defect calls',
          'Support ticket volume: 45% increase'
        ],
        dataSources: [
          'Product defect reports',
          'Support ticket categorization',
          'Software update deployment logs',
          'Customer feedback on new features'
        ]
      }
    };
    
    return insightsData[id] || insightsData[1];
  };

  const insight = getInsightData(parseInt(id));

  const getChartData = (insightId) => {
    const chartData = {
      1: [
        { month: 'Aug', time: 4.2 },
        { month: 'Sep', time: 4.5 },
        { month: 'Oct', time: 5.1 }
      ],
      2: [
        { month: 'Aug', csat: 4.3 },
        { month: 'Sep', csat: 4.1 },
        { month: 'Oct', csat: 3.8 }
      ],
      3: [
        { quarter: 'Q2', rate: 65 },
        { quarter: 'Q3', rate: 78 }
      ],
      4: [
        { issue: 'Password Reset', percentage: 34 },
        { issue: 'Technical Support', percentage: 28 },
        { issue: 'Billing', percentage: 18 },
        { issue: 'Account Access', percentage: 12 },
        { issue: 'Other', percentage: 8 }
      ],
      5: [
        { level: 'High Stress', percentage: 45 },
        { level: 'Moderate Stress', percentage: 35 },
        { level: 'Low Stress', percentage: 20 }
      ],
      6: [
        { month: 'Aug', time: 4.2 },
        { month: 'Sep', time: 3.8 },
        { month: 'Oct', time: 3.4 }
      ],
      7: [
        { hour: '10 AM', rate: 15 },
        { hour: '12 PM', rate: 22 },
        { hour: '2 PM', rate: 28 },
        { hour: '4 PM', rate: 25 },
        { hour: '6 PM', rate: 18 }
      ],
      8: [
        { week: 'Pre-Update', reports: 100 },
        { week: 'Week 1', reports: 167 },
        { week: 'Week 2', reports: 145 },
        { week: 'Week 3', reports: 120 }
      ]
    };
    
    return chartData[insightId] || chartData[1];
  };

  const chartData = getChartData(parseInt(id));

  const getSuggestedActions = (insightId) => {
    const actionsData = {
      1: [ // Call handling time increased
        {
          id: 101,
          title: 'Call flow optimization',
          reasoning: 'Analyze and streamline call escalation processes to reduce handling time for complex technical issues.',
          score: 9.2,
          confidence: 'High',
          effort: 'Medium',
          tags: ['Process Improvement', 'Efficiency']
        },
        {
          id: 102,
          title: 'Agent training on new features',
          reasoning: 'Provide comprehensive training on recent product updates to reduce resolution time for technical issues.',
          score: 8.5,
          confidence: 'High',
          effort: 'Medium',
          tags: ['Training', 'Product Knowledge']
        },
        {
          id: 103,
          title: 'Implement knowledge base',
          reasoning: 'Create detailed troubleshooting guides for common technical issues to speed up resolution.',
          score: 7.8,
          confidence: 'Medium',
          effort: 'High',
          tags: ['Knowledge Management', 'Long-term']
        }
      ],
      2: [ // Customer satisfaction dropped
        {
          id: 1,
          title: 'Immediate staffing increase',
          reasoning: 'Add more agents during peak hours to reduce wait times and improve customer satisfaction.',
          score: 9.5,
          confidence: 'High',
          effort: 'Low',
          tags: ['Quick Fix', 'Staffing']
        },
        {
          id: 2,
          title: 'Technical issue escalation review',
          reasoning: 'Review and improve the escalation process for unresolved technical issues.',
          score: 8.7,
          confidence: 'High',
          effort: 'Medium',
          tags: ['Process Improvement', 'Quality']
        },
        {
          id: 3,
          title: 'Customer communication training',
          reasoning: 'Train agents on better communication during complex problem resolution.',
          score: 7.3,
          confidence: 'Medium',
          effort: 'Medium',
          tags: ['Training', 'Communication']
        }
      ],
      3: [ // AI resolution rate improved
        {
          id: 1,
          title: 'Expand AI capabilities',
          reasoning: 'Extend AI training to handle more complex queries and reduce human escalations further.',
          score: 8.9,
          confidence: 'High',
          effort: 'Medium',
          tags: ['AI Enhancement', 'Automation']
        },
        {
          id: 2,
          title: 'AI performance monitoring',
          reasoning: 'Implement detailed monitoring to track AI success rates and identify improvement areas.',
          score: 7.6,
          confidence: 'Medium',
          effort: 'Low',
          tags: ['Monitoring', 'Analytics']
        },
        {
          id: 3,
          title: 'Customer AI education',
          reasoning: 'Educate customers on how to interact effectively with AI agents for better outcomes.',
          score: 6.8,
          confidence: 'Medium',
          effort: 'High',
          tags: ['Customer Education', 'Long-term']
        }
      ],
      4: [ // Password reset issue
        {
          id: 1,
          title: 'Self-service password reset',
          reasoning: 'Implement an intuitive self-service portal to reduce password reset call volume.',
          score: 9.1,
          confidence: 'High',
          effort: 'Medium',
          tags: ['Self-Service', 'Automation']
        },
        {
          id: 2,
          title: 'Password policy review',
          reasoning: 'Simplify password requirements to reduce lockouts and reset frequency.',
          score: 8.3,
          confidence: 'High',
          effort: 'Low',
          tags: ['Policy Change', 'Quick Fix']
        },
        {
          id: 3,
          title: 'Multi-factor authentication setup',
          reasoning: 'Improve MFA setup process to reduce confusion and support calls.',
          score: 7.5,
          confidence: 'Medium',
          effort: 'High',
          tags: ['Security', 'User Experience']
        }
      ],
      5: [ // Agent burnout
        {
          id: 1,
          title: 'Mental health support program',
          reasoning: 'Implement counseling services and stress management resources for agents.',
          score: 9.3,
          confidence: 'High',
          effort: 'Medium',
          tags: ['Wellbeing', 'Support']
        },
        {
          id: 2,
          title: 'Improved break scheduling',
          reasoning: 'Optimize break schedules to provide adequate recovery time between stressful interactions.',
          score: 8.1,
          confidence: 'High',
          effort: 'Low',
          tags: ['Scheduling', 'Quick Fix']
        },
        {
          id: 3,
          title: 'Escalation support team',
          reasoning: 'Create specialized team to handle complex escalations and reduce agent stress.',
          score: 7.8,
          confidence: 'Medium',
          effort: 'High',
          tags: ['Team Structure', 'Long-term']
        }
      ],
      6: [ // Email response time improved
        {
          id: 1,
          title: 'Expand AI email assistance',
          reasoning: 'Extend AI capabilities to more email categories for further response time improvements.',
          score: 8.7,
          confidence: 'High',
          effort: 'Medium',
          tags: ['AI Enhancement', 'Efficiency']
        },
        {
          id: 2,
          title: 'Email template optimization',
          reasoning: 'Improve and expand email templates for faster, more consistent responses.',
          score: 7.9,
          confidence: 'Medium',
          effort: 'Low',
          tags: ['Templates', 'Consistency']
        },
        {
          id: 3,
          title: 'Email routing automation',
          reasoning: 'Implement intelligent routing to direct emails to the most qualified agents.',
          score: 7.2,
          confidence: 'Medium',
          effort: 'High',
          tags: ['Automation', 'Routing']
        }
      ],
      7: [ // Chat abandonment
        {
          id: 1,
          title: 'Peak hour staffing increase',
          reasoning: 'Add more chat agents during 2-4 PM peak hours to reduce abandonment rates.',
          score: 9.4,
          confidence: 'High',
          effort: 'Low',
          tags: ['Staffing', 'Quick Fix']
        },
        {
          id: 2,
          title: 'Chat response time optimization',
          reasoning: 'Implement auto-responses and improve initial response times during peak hours.',
          score: 8.6,
          confidence: 'High',
          effort: 'Medium',
          tags: ['Response Time', 'Automation']
        },
        {
          id: 3,
          title: 'Chat platform performance review',
          reasoning: 'Investigate and resolve technical issues affecting chat performance during peak times.',
          score: 7.4,
          confidence: 'Medium',
          effort: 'Medium',
          tags: ['Technical', 'Platform']
        }
      ],
      8: [ // Product defect reports
        {
          id: 1,
          title: 'Immediate hotfix deployment',
          reasoning: 'Deploy critical bug fixes to address the most common product defects.',
          score: 9.6,
          confidence: 'High',
          effort: 'Medium',
          tags: ['Hotfix', 'Critical']
        },
        {
          id: 2,
          title: 'Rollback to previous version',
          reasoning: 'Consider rolling back the recent software update if defects are severe.',
          score: 8.8,
          confidence: 'High',
          effort: 'High',
          tags: ['Rollback', 'Risk Management']
        },
        {
          id: 3,
          title: 'Enhanced testing process',
          reasoning: 'Implement more rigorous testing procedures before future software releases.',
          score: 7.7,
          confidence: 'Medium',
          effort: 'High',
          tags: ['Testing', 'Long-term']
        }
      ]
    };
    
    return actionsData[insightId] || actionsData[1];
  };

  const suggestedActions = getSuggestedActions(parseInt(id));

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      const newMessage = { type: 'user', message: chatMessage };
      setChatHistory([...chatHistory, newMessage]);
      setChatMessage('');
      
      // Generate contextual response based on insight and question
      setTimeout(() => {
        const botResponse = generateInsightResponse(chatMessage, insight);
        setChatHistory(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const generateInsightResponse = (question, insight) => {
    const questionLower = question.toLowerCase();
    
    // Insight 1: Call handling time increased
    if (insight.id === 1) {
      if (questionLower.includes('caused') || questionLower.includes('why') || questionLower.includes('reason')) {
        return {
          type: 'bot',
          message: `Based on our analysis, the 23% increase in call handling time was caused by:\n\n• Complex technical issues requiring longer resolution (up from 6.1 to 8.3 minutes)\n• Product defect cases needing multiple escalations\n• Insufficient agent training on new product features\n• Increased complexity of customer queries\n\nTechnical issues now account for 45% of call volume, up from 32% last month.`
        };
      }
      if (questionLower.includes('reduce') || questionLower.includes('improve') || questionLower.includes('fix')) {
        return {
          type: 'bot',
          message: `To reduce call handling time, I recommend:\n\n• Implement comprehensive training on new product features\n• Create detailed troubleshooting guides for common technical issues\n• Streamline escalation processes to reduce transfer delays\n• Add more senior agents during peak technical issue hours\n• Develop self-service options for simple technical problems`
        };
      }
      if (questionLower.includes('agent') && (questionLower.includes('affected') || questionLower.includes('impact'))) {
        return {
          type: 'bot',
          message: `Agents most affected by increased call handling time:\n\n• Technical support agents (avg. 8.3 min vs 6.1 min)\n• New agents with <6 months experience (avg. 7.2 min)\n• Agents handling product defect cases (avg. 9.1 min)\n• Agents working during peak hours (2-4 PM)\n\nSenior agents (>2 years) still maintain 4.8 min average.`
        };
      }
      if (questionLower.includes('training')) {
        return {
          type: 'bot',
          message: `Recommended training to improve efficiency:\n\n• Advanced troubleshooting techniques for technical issues\n• New product feature walkthroughs and common problems\n• Escalation procedures and when to transfer calls\n• Time management and call flow optimization\n• Customer communication skills for complex issues\n\nTraining should focus on the 45% of calls that are technical in nature.`
        };
      }
    }
    
    // Insight 2: Customer satisfaction dropped
    if (insight.id === 2) {
      if (questionLower.includes('why') || questionLower.includes('caused') || questionLower.includes('drop')) {
        return {
          type: 'bot',
          message: `Customer satisfaction dropped due to:\n\n• Long wait times during peak hours (avg. 4.2 min vs 2.1 min)\n• Unresolved technical issues (67% increase in complaints)\n• Poor communication during complex problem resolution\n• Inconsistent solution quality across agents\n• Lack of follow-up on escalated cases`
        };
      }
      if (questionLower.includes('complaining') || questionLower.includes('issues')) {
        return {
          type: 'bot',
          message: `Top customer complaints in technical support:\n\n• "Long wait times" (mentioned in 89% of negative feedback)\n• "Agent couldn't solve my problem" (67% of complaints)\n• "Had to call back multiple times" (45% of complaints)\n• "Agent seemed inexperienced" (34% of complaints)\n• "No follow-up after escalation" (28% of complaints)`
        };
      }
      if (questionLower.includes('improve') || questionLower.includes('better')) {
        return {
          type: 'bot',
          message: `To improve technical support experience:\n\n• Add more agents during peak hours (2-4 PM)\n• Implement better escalation procedures with follow-up\n• Provide comprehensive training on common technical issues\n• Create detailed knowledge base for agents\n• Establish quality assurance program for consistency`
        };
      }
      if (questionLower.includes('agent') && questionLower.includes('score')) {
        return {
          type: 'bot',
          message: `Agents with best satisfaction scores:\n\n• Sarah Johnson (4.7/5) - 5 years experience\n• Mike Chen (4.6/5) - Technical specialist\n• Lisa Rodriguez (4.5/5) - 3 years experience\n\nCommon traits: thorough problem-solving, clear communication, follow-up on complex cases.`
        };
      }
    }
    
    // Insight 5: Agent burnout
    if (insight.id === 5) {
      if (questionLower.includes('causes') || questionLower.includes('stress')) {
        return {
          type: 'bot',
          message: `Main causes of agent stress:\n\n• High volume of angry customer interactions (45% report this as primary stressor)\n• Complex technical escalations without proper support\n• Insufficient breaks and recovery time between stressful calls\n• Lack of mental health support resources\n• Pressure to meet performance metrics during high-stress periods`
        };
      }
      if (questionLower.includes('support') || questionLower.includes('help')) {
        return {
          type: 'bot',
          message: `Ways to better support agents:\n\n• Implement mental health counseling services\n• Create stress management training programs\n• Optimize break schedules for adequate recovery time\n• Establish peer support groups and mentorship programs\n• Provide clear escalation procedures to reduce stress\n• Regular check-ins with managers on agent wellbeing`
        };
      }
      if (questionLower.includes('team') && questionLower.includes('affected')) {
        return {
          type: 'bot',
          message: `Teams most affected by burnout:\n\n• Technical support team (52% report high stress)\n• Peak hour agents (2-4 PM shift) - 48% high stress\n• New agents (<6 months) - 41% high stress\n• Agents handling product defect cases - 38% high stress\n\nSenior agents (>2 years) report 23% high stress levels.`
        };
      }
      if (questionLower.includes('resource') || questionLower.includes('help')) {
        return {
          type: 'bot',
          message: `Resources that would help reduce stress:\n\n• Professional counseling services (preferred by 67% of agents)\n• Stress management workshops and training\n• Flexible break scheduling during high-stress periods\n• Clear escalation procedures and support systems\n• Peer support groups and mentorship programs\n• Regular wellness check-ins with HR`
        };
      }
    }
    
    // Default response for other questions
    return {
      type: 'bot',
      message: `Great question about "${insight.title}"! Based on our analysis:\n\n• ${insight.contributingFactors[0]}\n• ${insight.contributingFactors[1]}\n• ${insight.supportingEvidence[0]}\n\nWould you like me to elaborate on any specific aspect of this insight?`
    };
  };

  return (
    <div className="flex h-full">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto space-y-6 p-8">
          {/* Header */}
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold text-gray-900">{insight.title}</h1>
          </div>

          {/* Overview */}
          <div className="card">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-600">{insight.overview}</p>
          </div>

          {/* Dynamic Chart */}
          <div className="card">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              {insight.id === 1 && 'Call Handling Time Trend'}
              {insight.id === 2 && 'Customer Satisfaction Trend'}
              {insight.id === 3 && 'AI Resolution Rate'}
              {insight.id === 4 && 'Top Customer Issues Distribution'}
              {insight.id === 5 && 'Agent Stress Levels'}
              {insight.id === 6 && 'Email Response Time Trend'}
              {insight.id === 7 && 'Chat Abandonment Rate by Hour'}
              {insight.id === 8 && 'Product Defect Reports Timeline'}
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey={insight.id === 1 ? 'month' : insight.id === 2 ? 'month' : insight.id === 3 ? 'quarter' : insight.id === 4 ? 'issue' : insight.id === 5 ? 'level' : insight.id === 6 ? 'month' : insight.id === 7 ? 'hour' : 'week'} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey={insight.id === 1 ? 'time' : insight.id === 2 ? 'csat' : insight.id === 3 ? 'rate' : insight.id === 4 ? 'percentage' : insight.id === 5 ? 'percentage' : insight.id === 6 ? 'time' : insight.id === 7 ? 'rate' : 'reports'} fill="#64748b" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Contributing Factors and Supporting Evidence */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Contributing Factors</h2>
              <ul className="space-y-2">
                {insight.contributingFactors.map((factor, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">{factor}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Supporting Evidence</h2>
              <ul className="space-y-2">
                {insight.supportingEvidence.map((evidence, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">{evidence}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Data Sources */}
          <div className="card">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Data Sources</h2>
            <div className="space-y-2">
              {insight.dataSources.map((source, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  <span className="text-gray-600">{source}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Interface */}
          <div className="card">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Ask about this insight</h2>
            <div className="space-y-4">
              <div className="h-64 overflow-y-auto space-y-3">
                {chatHistory.map((chat, index) => (
                  <div key={index} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs px-4 py-2 rounded-lg ${
                      chat.type === 'user' 
                        ? 'bg-gray-800 text-white' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      <div className="whitespace-pre-line">{chat.message}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask a question about this insight..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  className="btn-primary flex items-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send</span>
                </button>
              </div>
              
              {/* Chat Suggestions */}
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Try asking:</p>
                <div className="flex flex-wrap gap-2">
                  {insightSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => setChatMessage(suggestion)}
                      className="text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-1 rounded-full border border-gray-200 transition-colors duration-200"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Suggested Actions Sidebar */}
      <div className="w-[500px] bg-white border-l border-gray-200 p-8 overflow-y-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Suggested Actions</h2>
        <div className="space-y-6">
          {suggestedActions.map((action) => (
            <ActionCard key={action.id} action={action} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsightPage;

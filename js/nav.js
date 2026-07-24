/**
 * 权益营销中台 - htmlpage 专用布局生成器
 * 适配 htmlpage 目录下的页面导航
 */

// ========== 菜单配置 ==========
const MENU_CONFIG = [
  // 首页（一级导航）
  {
    name: "首页",
    icon: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    href: "index.html",
    type: "direct"
  },
  // 看板中心
  {
    name: "看板中心",
    icon: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`,
    subMenus: [
      { name: "概览", href: "overview.html" },
      { name: "审批", href: "workbench.html" }
    ]
  },
  // 权益管理
  {
    name: "权益管理",
    icon: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`,
    subMenus: [
      { name: "权益管理", href: "equity-list.html" },
      { name: "权益品类管理", href: "equity-category.html" },
      { name: "供应商管理", href: "supplier-list.html" }
    ]
  },
  // 权益库存管理
  {
    name: "权益库存管理",
    icon: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
    subMenus: [
      { name: "权益库存管理", href: "benefit-stock.html" },
      { name: "库存预警", href: "inventory-alert.html" }
    ]
  },
  // 权益发放管理
  {
    name: "权益发放管理",
    icon: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>`,
    subMenus: [
      { name: "权益投放活动", href: "activity-management.html" },
      { name: "投放规则设置", href: "rule-management.html" },
      { name: "活动费用统计", href: "cost-statistics.html" },
      { name: "活动场景管理", href: "scene-management.html" }
    ]
  },
  // 权益核销对账
  {
    name: "权益核销对账",
    icon: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
    subMenus: [
      { name: "权益流水", href: "equity-useflow.html" },
      { name: "行内权益核销对账", href: "reconcile-internal.html" },
      { name: "第三方权益核销对账", href: "reconcile-thirdparty.html" },
      { name: "实物奖品核销对账", href: "reconcile-physical.html" },
      { name: "权益成本结算", href: "reconcile-settlement.html" },
      { name: "权益核销", href: "redemption.html" },
      { name: "权益核销new", href: "redemptionnew.html" }
    ]
  },
  // 权益运营维护
  {
    name: "权益运营维护",
    icon: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    subMenus: [
      { name: "客户列表", href: "operation-customers.html" },
      { name: "权益黑名单", href: "operation-blacklist.html" },
      { name: "权益回收", href: "operation-recovery.html" },
      { name: "权益补发", href: "operation-reissue.html" }
    ]
  },
  // 权益数据分析
  {
    name: "权益数据分析",
    icon: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
    subMenus: [
      { name: "直投成效分析", href: "analysis-direct.html" },
      { name: "重要数据分析", href: "analysis-overview.html" },
      { name: "权益报表", href: "analysis-report.html" }
    ]
  },
  // 监控中心
  {
    name: "监控中心",
    icon: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
    subMenus: [
      { name: "权益库存监控", href: "benefit-stock.html" },
      { name: "权益发放异常监控", href: "grant-exception.html" },
      { name: "组件异常监测", href: "component-health.html" },
      { name: "三方权益供应商核销结算", href: "thirdparty-settlement.html" }
    ]
  }
];

// 底部独立一级菜单
const BOTTOM_MENU_CONFIG = [
  {
    name: "渠道管理",
    icon: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>`,
    href: "channel-list.html",
    type: "direct"
  },
  {
    name: "事件管理",
    icon: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    href: "event-list.html",
    type: "direct"
  }
];

// ========== 页面功能名称与说明 ==========
// 统一显示在右侧内容区顶部，文案不参与业务逻辑。
const PAGE_META = {
  "index.html": { title: "首页", desc: "汇总展示权益业务核心指标、趋势、库存预警与待办事项", aliases: ["权益中心概览"] },
  "overview.html": { title: "概览", desc: "集中展示权益运营规模、发放转化、库存健康度与业务趋势", aliases: ["首页概览"] },
  "workbench.html": { title: "审批", desc: "集中处理权益、活动及相关运营事项的待审批任务" },
  "equity-list.html": { title: "权益管理", desc: "维护权益基础信息、上下架状态及可用范围" },
  "equity-category.html": { title: "权益品类管理", desc: "维护权益品类、分类层级及关联规则" },
  "supplier-list.html": { title: "供应商管理", desc: "维护权益供应商资料、授权信息与合作状态" },
  "benefit-stock.html": { title: "权益库存管理", desc: "查询权益库存、入库消耗、锁定数量及有效期情况" },
  "inventory-alert.html": { title: "库存预警", desc: "配置权益库存数量与到期预警，并管理通知联系人" },
  "activity-management.html": { title: "权益投放活动", desc: "创建、启动、编辑、监控和下架营销投放活动", aliases: ["权益直投活动"] },
  "rule-management.html": { title: "投放规则设置", desc: "配置权益投放条件、客群范围、频次与生效规则" },
  "cost-statistics.html": { title: "活动费用统计", desc: "统计活动预算、权益成本、执行消耗及费用趋势" },
  "scene-management.html": { title: "活动场景管理", desc: "维护营销活动场景、目标配置及场景运行状态" },
  "equity-useflow.html": { title: "权益流水", desc: "查询权益发放、领取、使用、失效及回退流水" },
  "reconcile-internal.html": { title: "行内权益核销对账", desc: "查询并核对行内卡券权益的全生命周期流水记录" },
  "reconcile-thirdparty.html": { title: "第三方权益核销对账", desc: "查询并核对第三方权益发放、核销及结算流水" },
  "reconcile-physical.html": { title: "实物奖品核销对账", desc: "查询并核对实物奖品领取、发货及签收记录" },
  "reconcile-settlement.html": { title: "权益成本结算", desc: "汇总权益核销成本并管理供应商结算记录" },
  "redemption.html": { title: "权益核销", desc: "查询权益核销记录、核销状态及相关业务明细" },
  "redemptionnew.html": { title: "权益核销new", desc: "集中查询各类权益核销与总对账数据" },
  "operation-customers.html": { title: "客户列表", desc: "查询客户基础信息、权益持有及运营触达情况" },
  "operation-blacklist.html": { title: "权益黑名单", desc: "维护权益领取与使用限制名单及生效规则" },
  "operation-recovery.html": { title: "权益回收", desc: "处理已发权益的回收申请、执行结果与记录" },
  "operation-reissue.html": { title: "权益补发", desc: "处理权益补发申请、执行状态与补发结果" },
  "analysis-direct.html": { title: "直投成效分析", desc: "分析权益投放任务的触达、领取、核销与转化成效" },
  "analysis-overview.html": { title: "重要数据分析", desc: "汇总权益运营关键数据并展示多维分析结果" },
  "analysis-report.html": { title: "权益报表", desc: "查询、汇总并导出权益业务统计报表" },
  "grant-exception.html": { title: "权益发放异常监控", desc: "监控权益发放失败、延迟与异常处理状态" },
  "component-health.html": { title: "组件异常监测", desc: "监测权益平台关键组件的运行状态与异常信息" },
  "thirdparty-settlement.html": { title: "三方权益供应商核销结算", desc: "监控第三方权益供应商核销数据及结算进度" },
  "channel-list.html": { title: "渠道管理", desc: "维护权益投放渠道、对接状态及启停配置" },
  "event-list.html": { title: "事件管理", desc: "维护权益业务事件、触发条件及处理状态" }
};

// ========== 工具函数 ==========
function getCurrentPagePath() {
  var path = window.location.pathname;
  return path.replace(/\\/g, '/').split('/').pop() || 'index.html';
}

function isMenuActive(menu) {
  // 直接链接的一级菜单
  if (menu.type === 'direct' && menu.href) {
    return getCurrentPagePath() === menu.href;
  }
  // 有子菜单的情况
  if (menu.subMenus) {
    return menu.subMenus.some(function(sub) {
      return getCurrentPagePath() === sub.href;
    });
  }
  return false;
}

function isSubmenuActive(subMenu) {
  return getCurrentPagePath() === subMenu.href;
}

function findCurrentMenuPath() {
  // 检查主菜单
  for (var mi = 0; mi < MENU_CONFIG.length; mi++) {
    var menu = MENU_CONFIG[mi];
    if (menu.type === 'direct' && isMenuActive(menu)) {
      return { group: null, name: menu.name, href: menu.href };
    }
    if (menu.subMenus) {
      for (var si = 0; si < menu.subMenus.length; si++) {
        var sub = menu.subMenus[si];
        if (isSubmenuActive(sub)) {
          return { group: menu.name, name: sub.name, href: sub.href };
        }
      }
    }
  }
  // 检查底部菜单
  for (var bi = 0; bi < BOTTOM_MENU_CONFIG.length; bi++) {
    var bmenu = BOTTOM_MENU_CONFIG[bi];
    if (isMenuActive(bmenu)) {
      return { group: null, name: bmenu.name, href: bmenu.href };
    }
  }
  return null;
}

// ========== 渲染侧边栏 ==========
function renderSidebar() {
  var sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  // 侧边栏头部
  var html = '<div class="sidebar-header">';
  html += '  <div class="sidebar-logo-icon">ECB</div>';
  html += '  <div class="sidebar-title-wrap">';
  html += '    <div class="sidebar-title">对公权益营销中台</div>';
  html += '    <div class="sidebar-title-sub">Corporate Benefit Platform</div>';
  html += '  </div>';
  html += '</div>';

  html += '<nav class="sidebar-nav">';

  // 渲染主菜单
  MENU_CONFIG.forEach(function(menu) {
    var active = isMenuActive(menu);

    if (menu.type === 'direct') {
      // 直接链接的一级菜单
      html += '<a href="' + menu.href + '" class="menu-btn' + (active ? ' active' : '') + '">' +
        '<span class="menu-left"><span class="menu-icon">' + menu.icon + '</span><span>' + menu.name + '</span></span></a>';
    } else {
      // 有子菜单的折叠菜单
      html += '<div class="menu-group">';
      html += '<button class="menu-btn' + (active ? ' active' : '') + '" onclick="toggleMenu(this)">' +
        '<span class="menu-left"><span class="menu-icon">' + menu.icon + '</span><span>' + menu.name + '</span></span>' +
        '<span class="menu-arrow">&#9660;</span></button>';

      html += '<div class="submenu-list' + (active ? '' : ' submenu-collapsed') + '">';

      menu.subMenus.forEach(function(sub) {
        var subActive = isSubmenuActive(sub);
        html += '<a href="' + sub.href + '" class="submenu-item' + (subActive ? ' active' : '') + '">' + sub.name + '</a>';
      });

      html += '</div></div>';
    }
  });

  // 渲染底部独立菜单
  BOTTOM_MENU_CONFIG.forEach(function(menu) {
    var active = isMenuActive(menu);
    html += '<a href="' + menu.href + '" class="menu-btn' + (active ? ' active' : '') + '">' +
      '<span class="menu-left"><span class="menu-icon">' + menu.icon + '</span><span>' + menu.name + '</span></span></a>';
  });

  html += '</nav>';
  sidebar.innerHTML = html;
}

// 展开/收起菜单
function toggleMenu(btn) {
  var group = btn.closest('.menu-group');
  if (!group) return;
  var submenu = group.querySelector('.submenu-list');
  if (!submenu) return;

  btn.classList.toggle('active');
  submenu.classList.toggle('submenu-collapsed');

  var arrow = btn.querySelector('.menu-arrow');
  if (arrow) arrow.style.transform = btn.classList.contains('active') ? 'rotate(180deg)' : '';
}

// ========== 渲染顶部 Header ==========
function renderHeader() {
  var header = document.getElementById('header');
  if (!header) return;

  header.innerHTML =
    '<div class="header-right">' +
      '<div class="header-notification" onclick="toggleNotificationDropdown(event)" title="消息通知">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
          '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>' +
          '<path d="M13.73 21a2 2 0 0 1-3.46 0"/>' +
        '</svg>' +
        '<span class="header-notification-dot">3</span>' +
        '<div class="notification-dropdown" id="notificationDropdown">' +
          '<div class="dropdown-header">' +
            '<span>消息通知</span>' +
            '<a href="javascript:;" class="dropdown-action">全部已读</a>' +
          '</div>' +
          '<div class="notification-list">' +
            '<div class="notification-item unread">' +
              '<div class="notification-dot-mark"></div>' +
              '<div class="notification-content">' +
                '<div class="notification-title">活动审批待处理</div>' +
                '<div class="notification-desc">您有 2 个活动申请待审批，请尽快处理</div>' +
                '<div class="notification-time">10 分钟前</div>' +
              '</div>' +
            '</div>' +
            '<div class="notification-item unread">' +
              '<div class="notification-dot-mark"></div>' +
              '<div class="notification-content">' +
                '<div class="notification-title">权益库存预警</div>' +
                '<div class="notification-desc">部分权益库存不足 10%</div>' +
                '<div class="notification-time">1 小时前</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div class="dropdown-footer">' +
            '<a href="javascript:;">查看全部消息</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="header-user-info" onclick="toggleUserDropdown(event)">' +
        '<div class="header-avatar">管</div>' +
        '<span class="header-user-name">管理员</span>' +
        '<svg class="header-user-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
          '<polyline points="6 9 12 15 18 9"/>' +
        '</svg>' +
        '<div class="user-dropdown" id="userDropdown">' +
          '<div class="user-dropdown-header">' +
            '<div class="header-avatar">管</div>' +
            '<div>' +
              '<div class="user-dropdown-name">系统管理员</div>' +
              '<div class="user-dropdown-role">超级管理员</div>' +
            '</div>' +
          '</div>' +
          '<div class="user-dropdown-divider"></div>' +
          '<button class="user-dropdown-item" onclick="handleUserAction(\'profile\')">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' +
            '<span>个人中心</span>' +
          '</button>' +
          '<button class="user-dropdown-item" onclick="handleUserAction(\'logout\')">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>' +
            '<span>退出登录</span>' +
          '</button>' +
        '</div>' +
      '</div>' +
    '</div>';
}

function toggleNotificationDropdown(e) {
  e.stopPropagation();
  var dd = document.getElementById('notificationDropdown');
  if (!dd) return;
  var userDD = document.getElementById('userDropdown');
  if (userDD) userDD.classList.remove('show');
  dd.classList.toggle('show');
}

function toggleUserDropdown(e) {
  e.stopPropagation();
  var dd = document.getElementById('userDropdown');
  if (!dd) return;
  var notifDD = document.getElementById('notificationDropdown');
  if (notifDD) notifDD.classList.remove('show');
  dd.classList.toggle('show');
}

function handleUserAction(action) {
  var dd = document.getElementById('userDropdown');
  if (dd) dd.classList.remove('show');
  switch(action) {
    case 'profile': alert('打开个人中心'); break;
    case 'logout': if(confirm('确定退出登录？')) { alert('已退出登录'); } break;
  }
}

document.addEventListener('click', function(e) {
  var notifDD = document.getElementById('notificationDropdown');
  if (notifDD && !e.target.closest('.header-notification')) notifDD.classList.remove('show');
  var userDD = document.getElementById('userDropdown');
  if (userDD && !e.target.closest('.header-user-info')) userDD.classList.remove('show');
});

// ========== 渲染页面 Tab 切换区 ==========
const TABS_STORAGE_KEY = 'mk_open_tabs_htmlpage';

function getOpenTabs() {
  try {
    var raw = localStorage.getItem(TABS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) { return []; }
}

function setOpenTabs(tabs) {
  try {
    localStorage.setItem(TABS_STORAGE_KEY, JSON.stringify(tabs));
  } catch (e) {}
}

function getCurrentTabInfo() {
  var info = findCurrentMenuPath();
  if (info) {
    return { name: info.name, href: info.href };
  }
  var titleEl = document.querySelector('title');
  var title = titleEl ? titleEl.textContent : '';
  var pageName = title.split('-')[0].trim() || getCurrentPagePath();
  return { name: pageName, href: getCurrentPagePath() };
}

function syncCurrentTab() {
  var tabs = getOpenTabs();
  var info = getCurrentTabInfo();
  var currentPath = getCurrentPagePath();

  var exists = tabs.some(function(t) { return t.path === currentPath; });
  if (!exists) {
    tabs.push({ name: info.name, path: currentPath, href: info.href, ts: Date.now() });
    setOpenTabs(tabs);
  } else {
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i].path === currentPath) {
        tabs[i].name = info.name;
        tabs[i].href = info.href;
        tabs[i].ts = Date.now();
        break;
      }
    }
    setOpenTabs(tabs);
  }
}

function closeTab(path, e) {
  if (e) {
    e.stopPropagation();
    e.preventDefault();
  }
  var tabs = getOpenTabs();
  tabs = tabs.filter(function(t) { return t.path !== path; });
  setOpenTabs(tabs);

  var currentPath = getCurrentPagePath();
  if (currentPath === path) {
    if (tabs.length > 0) {
      window.location.href = tabs[0].href || tabs[0].path;
    } else {
      window.location.href = 'index.html';
    }
  } else {
    renderPageTabs();
  }
}

function closeAllTabs() {
  setOpenTabs([]);
  window.location.href = 'index.html';
}

function closeOtherTabs(path) {
  var tabs = getOpenTabs();
  tabs = tabs.filter(function(t) { return t.path === path; });
  setOpenTabs(tabs);
  renderPageTabs();
}

function renderPageTabs() {
  var tabBar = document.getElementById('pageTabs');
  if (!tabBar) return;

  var tabs = getOpenTabs();
  var currentPath = getCurrentPagePath();

  if (tabs.length === 0) {
    tabBar.innerHTML = '';
    tabBar.classList.add('empty');
    return;
  }
  tabBar.classList.remove('empty');

  var html = '';
  tabs.forEach(function(t) {
    var isActive = t.path === currentPath;
    var href = t.href || t.path;
    html += '<div class="page-tab' + (isActive ? ' active' : '') + '">' +
      '<a href="' + href + '" class="page-tab-link" title="' + t.name + '">' +
        '<span class="page-tab-name">' + t.name + '</span>' +
      '</a>' +
      '<button class="page-tab-close" onclick="closeTab(\'' + t.path + '\', event)" title="关闭">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
      '</button>' +
    '</div>';
  });

  html += '<div class="page-tabs-actions">' +
    '<button class="page-tabs-action" onclick="closeOtherTabs(\'' + currentPath + '\')" title="关闭其他">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>' +
      '<span>关闭其他</span>' +
    '</button>' +
    '<button class="page-tabs-action" onclick="closeAllTabs()" title="关闭全部">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>' +
      '<span>关闭全部</span>' +
    '</button>' +
  '</div>';

  tabBar.innerHTML = html;
}

// ========== 旧版页面外壳兼容 ==========
// nav.js 菜单中的部分页面仍使用 app-container/main-content/top-header/page-content。
// 在不修改页面业务内容的前提下，将这些旧版外壳升级为视觉基准页使用的 layout-v2。
function normalizeLegacyLayout() {
  var app = document.querySelector('.app-container');
  if (!app) return;

  app.classList.remove('app-container');
  app.classList.add('app', 'layout-v2');

  var main = app.querySelector('.main-content');
  if (!main) return;
  main.classList.remove('main-content');
  main.classList.add('main');

  var oldHeader = main.querySelector('.top-header');
  var oldTabs = main.querySelector('.tab-bar');
  var insertBeforeNode = oldHeader || oldTabs || main.firstChild;

  var topShell = document.createElement('div');
  topShell.className = 'top-shell';

  var header = document.createElement('header');
  header.id = 'header';
  header.className = 'app-header';

  var pageTabs = document.createElement('div');
  pageTabs.id = 'pageTabs';
  pageTabs.className = 'page-tabs empty';

  topShell.appendChild(header);
  topShell.appendChild(pageTabs);
  main.insertBefore(topShell, insertBeforeNode);

  if (oldHeader) oldHeader.remove();
  if (oldTabs) oldTabs.remove();

  var pageContent = main.querySelector('.page-content');
  if (pageContent) {
    pageContent.classList.remove('page-content');
    pageContent.classList.add('content');
  }
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function hideLegacyPageIntro(pageRoot, meta) {
  var names = [meta.title].concat(meta.aliases || []);
  var candidates = Array.prototype.slice.call(pageRoot.children, 0, 3);

  for (var ci = 0; ci < candidates.length; ci++) {
    var candidate = candidates[ci];
    if (candidate.classList.contains('mk-function-intro')) continue;

    var elements = [candidate].concat(Array.prototype.slice.call(candidate.querySelectorAll('*')));
    var titleEl = null;
    for (var ei = 0; ei < elements.length; ei++) {
      var text = (elements[ei].textContent || '').trim();
      if (elements[ei].children.length === 0 && names.indexOf(text) !== -1) {
        titleEl = elements[ei];
        break;
      }
    }
    if (!titleEl) continue;

    var hasActions = !!candidate.querySelector('button, a');
    if (!hasActions) {
      candidate.hidden = true;
      return;
    }

    var textBlock = titleEl;
    while (textBlock.parentElement && textBlock.parentElement !== candidate &&
           !textBlock.parentElement.querySelector('button, a')) {
      textBlock = textBlock.parentElement;
    }
    textBlock.hidden = true;
    candidate.classList.add('mk-page-header--actions-only');
    return;
  }
}

function renderFunctionIntro() {
  var meta = PAGE_META[getCurrentPagePath()];
  if (!meta) return;

  var pageRoot = document.querySelector('.content > .am-page, .content > .mk-page, .content');
  if (!pageRoot || pageRoot.querySelector(':scope > .mk-function-intro')) return;

  hideLegacyPageIntro(pageRoot, meta);

  var intro = document.createElement('div');
  intro.className = 'mk-function-intro';
  intro.innerHTML =
    '<div class="mk-function-name">' + escapeHTML(meta.title) + '</div>' +
    '<div class="mk-function-desc">' + escapeHTML(meta.desc) + '</div>';
  pageRoot.insertBefore(intro, pageRoot.firstChild);
}

// ========== 初始化 ==========
document.addEventListener('DOMContentLoaded', function() {
  normalizeLegacyLayout();
  renderFunctionIntro();
  renderSidebar();
  renderHeader();
  syncCurrentTab();
  renderPageTabs();
});

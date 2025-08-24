// Activity Diagram Data and Rendering
class ActivityDiagram {
    constructor() {
        this.data = {
            "swimlanes": [
                {
                    "name": "Customer",
                    "color": "#E3F2FD",
                    "activities": [
                        {"id": "start", "type": "start", "label": "Start", "x": 50, "y": 50},
                        {"id": "browse", "type": "activity", "label": "Browse restaurants", "x": 50, "y": 100},
                        {"id": "select", "type": "activity", "label": "Select food items", "x": 50, "y": 150},
                        {"id": "cart", "type": "activity", "label": "Add to cart", "x": 50, "y": 200},
                        {"id": "address", "type": "activity", "label": "Provide delivery address", "x": 50, "y": 250},
                        {"id": "payment_info", "type": "activity", "label": "Provide payment info", "x": 50, "y": 300},
                        {"id": "track", "type": "activity", "label": "Track order", "x": 50, "y": 450},
                        {"id": "receive", "type": "activity", "label": "Receive food", "x": 50, "y": 650},
                        {"id": "rate", "type": "activity", "label": "Rate & review", "x": 50, "y": 700}
                    ]
                },
                {
                    "name": "Food Delivery App",
                    "color": "#F3E5F5",
                    "activities": [
                        {"id": "request_info", "type": "activity", "label": "Request restaurant info", "x": 200, "y": 100},
                        {"id": "process", "type": "activity", "label": "Process selected items", "x": 200, "y": 150},
                        {"id": "calculate", "type": "activity", "label": "Calculate total", "x": 200, "y": 200},
                        {"id": "request_payment", "type": "activity", "label": "Request payment", "x": 200, "y": 300},
                        {"id": "send_order", "type": "activity", "label": "Send order to restaurant", "x": 200, "y": 400},
                        {"id": "assign_agent", "type": "activity", "label": "Assign delivery agent", "x": 200, "y": 500},
                        {"id": "update_status", "type": "activity", "label": "Update order status", "x": 200, "y": 550},
                        {"id": "notify", "type": "activity", "label": "Send notifications", "x": 200, "y": 600},
                        {"id": "complete", "type": "activity", "label": "Complete transaction", "x": 200, "y": 700}
                    ]
                },
                {
                    "name": "Restaurant",
                    "color": "#E8F5E8",
                    "activities": [
                        {"id": "receive_order", "type": "activity", "label": "Receive order notification", "x": 350, "y": 400},
                        {"id": "accept_decision", "type": "decision", "label": "Accept order?", "x": 350, "y": 450},
                        {"id": "prepare", "type": "activity", "label": "Prepare food", "x": 350, "y": 500},
                        {"id": "ready", "type": "activity", "label": "Mark ready for pickup", "x": 350, "y": 550}
                    ]
                },
                {
                    "name": "Delivery Agent",
                    "color": "#FFF3E0",
                    "activities": [
                        {"id": "assignment", "type": "activity", "label": "Receive assignment", "x": 500, "y": 500},
                        {"id": "navigate_restaurant", "type": "activity", "label": "Navigate to restaurant", "x": 500, "y": 550},
                        {"id": "pickup", "type": "activity", "label": "Pick up food", "x": 500, "y": 580},
                        {"id": "navigate_customer", "type": "activity", "label": "Navigate to customer", "x": 500, "y": 610},
                        {"id": "deliver", "type": "activity", "label": "Deliver food", "x": 500, "y": 650},
                        {"id": "update_delivery", "type": "activity", "label": "Update delivery status", "x": 500, "y": 680}
                    ]
                },
                {
                    "name": "Payment Gateway",
                    "color": "#FFEBEE",
                    "activities": [
                        {"id": "payment_method", "type": "decision", "label": "Payment method?", "x": 650, "y": 300},
                        {"id": "authorize", "type": "activity", "label": "Authorize card payment", "x": 650, "y": 350},
                        {"id": "process_payment", "type": "activity", "label": "Process payment", "x": 650, "y": 380},
                        {"id": "confirm", "type": "activity", "label": "Send confirmation", "x": 650, "y": 410}
                    ]
                }
            ],
            "connections": [
                {"from": "start", "to": "browse"},
                {"from": "browse", "to": "request_info"},
                {"from": "request_info", "to": "select"},
                {"from": "select", "to": "process"},
                {"from": "process", "to": "cart"},
                {"from": "cart", "to": "calculate"},
                {"from": "calculate", "to": "address"},
                {"from": "address", "to": "payment_info"},
                {"from": "payment_info", "to": "request_payment"},
                {"from": "request_payment", "to": "payment_method"},
                {"from": "payment_method", "to": "authorize"},
                {"from": "authorize", "to": "process_payment"},
                {"from": "process_payment", "to": "confirm"},
                {"from": "confirm", "to": "send_order"},
                {"from": "send_order", "to": "receive_order"},
                {"from": "receive_order", "to": "accept_decision"},
                {"from": "accept_decision", "to": "prepare"},
                {"from": "prepare", "to": "ready"},
                {"from": "ready", "to": "assign_agent"},
                {"from": "assign_agent", "to": "assignment"},
                {"from": "assignment", "to": "navigate_restaurant"},
                {"from": "navigate_restaurant", "to": "pickup"},
                {"from": "pickup", "to": "navigate_customer"},
                {"from": "navigate_customer", "to": "deliver"},
                {"from": "deliver", "to": "receive"},
                {"from": "receive", "to": "rate"}
            ]
        };
        
        this.svg = document.getElementById('activity-diagram');
        this.tooltip = document.getElementById('activity-tooltip');
        this.activityDetails = this.createActivityDetails();
        
        this.init();
    }
    
    createActivityDetails() {
        return {
            "start": {
                title: "Start Session",
                description: "Customer initiates the food ordering process by opening the app",
                lane: "Customer"
            },
            "browse": {
                title: "Browse Restaurants",
                description: "Customer explores available restaurants and their menus",
                lane: "Customer"
            },
            "select": {
                title: "Select Food Items",
                description: "Customer chooses desired food items from restaurant menu",
                lane: "Customer"
            },
            "cart": {
                title: "Add to Cart",
                description: "Selected items are added to the shopping cart",
                lane: "Customer"
            },
            "address": {
                title: "Provide Delivery Address",
                description: "Customer enters or confirms delivery location",
                lane: "Customer"
            },
            "payment_info": {
                title: "Provide Payment Info",
                description: "Customer enters payment details or selects payment method",
                lane: "Customer"
            },
            "track": {
                title: "Track Order",
                description: "Customer monitors order progress in real-time",
                lane: "Customer"
            },
            "receive": {
                title: "Receive Food",
                description: "Customer accepts delivery and receives the ordered food",
                lane: "Customer"
            },
            "rate": {
                title: "Rate & Review",
                description: "Customer provides feedback on the order experience",
                lane: "Customer"
            },
            "request_info": {
                title: "Request Restaurant Info",
                description: "App retrieves restaurant data and menu information",
                lane: "Food Delivery App"
            },
            "process": {
                title: "Process Selected Items",
                description: "App validates selected items and checks availability",
                lane: "Food Delivery App"
            },
            "calculate": {
                title: "Calculate Total",
                description: "App computes order total including taxes and delivery fees",
                lane: "Food Delivery App"
            },
            "request_payment": {
                title: "Request Payment",
                description: "App initiates payment processing workflow",
                lane: "Food Delivery App"
            },
            "send_order": {
                title: "Send Order to Restaurant",
                description: "App forwards confirmed order to the restaurant",
                lane: "Food Delivery App"
            },
            "assign_agent": {
                title: "Assign Delivery Agent",
                description: "App finds and assigns available delivery personnel",
                lane: "Food Delivery App"
            },
            "update_status": {
                title: "Update Order Status",
                description: "App maintains real-time order status updates",
                lane: "Food Delivery App"
            },
            "notify": {
                title: "Send Notifications",
                description: "App sends status updates to customer via push notifications",
                lane: "Food Delivery App"
            },
            "complete": {
                title: "Complete Transaction",
                description: "App finalizes the order and closes the transaction",
                lane: "Food Delivery App"
            },
            "receive_order": {
                title: "Receive Order Notification",
                description: "Restaurant receives new order alert and details",
                lane: "Restaurant"
            },
            "accept_decision": {
                title: "Accept Order Decision",
                description: "Restaurant decides whether to accept or reject the order based on availability and capacity",
                lane: "Restaurant"
            },
            "prepare": {
                title: "Prepare Food",
                description: "Restaurant cooks and packages the ordered items",
                lane: "Restaurant"
            },
            "ready": {
                title: "Mark Ready for Pickup",
                description: "Restaurant indicates food is ready for delivery agent",
                lane: "Restaurant"
            },
            "assignment": {
                title: "Receive Assignment",
                description: "Delivery agent gets order assignment notification",
                lane: "Delivery Agent"
            },
            "navigate_restaurant": {
                title: "Navigate to Restaurant",
                description: "Agent travels to restaurant location for pickup",
                lane: "Delivery Agent"
            },
            "pickup": {
                title: "Pick up Food",
                description: "Agent collects prepared food from restaurant",
                lane: "Delivery Agent"
            },
            "navigate_customer": {
                title: "Navigate to Customer",
                description: "Agent travels to customer's delivery address",
                lane: "Delivery Agent"
            },
            "deliver": {
                title: "Deliver Food",
                description: "Agent hands over food to customer at delivery location",
                lane: "Delivery Agent"
            },
            "update_delivery": {
                title: "Update Delivery Status",
                description: "Agent confirms successful delivery completion",
                lane: "Delivery Agent"
            },
            "payment_method": {
                title: "Payment Method Decision",
                description: "System determines payment method (card or cash) and routes accordingly",
                lane: "Payment Gateway"
            },
            "authorize": {
                title: "Authorize Card Payment",
                description: "Gateway validates and authorizes credit/debit card",
                lane: "Payment Gateway"
            },
            "process_payment": {
                title: "Process Payment",
                description: "Gateway executes the payment transaction",
                lane: "Payment Gateway"
            },
            "confirm": {
                title: "Send Confirmation",
                description: "Gateway sends payment confirmation to app",
                lane: "Payment Gateway"
            }
        };
    }
    
    init() {
        this.renderSwimlanes();
        this.renderConnections();
        this.renderActivities();
        this.setupInteractions();
    }
    
    renderSwimlanes() {
        const backgroundsGroup = document.getElementById('swimlane-backgrounds');
        const laneWidth = 160;
        const laneHeight = 750;
        
        this.data.swimlanes.forEach((lane, index) => {
            const x = index * laneWidth;
            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('class', `swimlane-bg ${lane.name.toLowerCase().replace(' ', '-')}`);
            rect.setAttribute('x', x);
            rect.setAttribute('y', 0);
            rect.setAttribute('width', laneWidth);
            rect.setAttribute('height', laneHeight);
            backgroundsGroup.appendChild(rect);
        });
    }
    
    renderConnections() {
        const connectionsGroup = document.getElementById('connections');
        const activityMap = this.createActivityMap();
        
        this.data.connections.forEach(connection => {
            const fromActivity = activityMap[connection.from];
            const toActivity = activityMap[connection.to];
            
            if (!fromActivity || !toActivity) return;
            
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            const path = this.createConnectionPath(fromActivity, toActivity);
            const isCrossLane = this.getLaneIndex(fromActivity) !== this.getLaneIndex(toActivity);
            
            line.setAttribute('d', path);
            line.setAttribute('class', `connection ${isCrossLane ? 'cross-lane' : ''}`);
            connectionsGroup.appendChild(line);
        });
    }
    
    createActivityMap() {
        const map = {};
        this.data.swimlanes.forEach(lane => {
            lane.activities.forEach(activity => {
                map[activity.id] = activity;
            });
        });
        return map;
    }
    
    getLaneIndex(activity) {
        for (let i = 0; i < this.data.swimlanes.length; i++) {
            const lane = this.data.swimlanes[i];
            if (lane.activities.find(a => a.id === activity.id)) {
                return i;
            }
        }
        return -1;
    }
    
    createConnectionPath(from, to) {
        const fromX = from.x + (from.type === 'start' ? 10 : from.type === 'decision' ? 25 : 60);
        const fromY = from.y + (from.type === 'start' ? 10 : from.type === 'decision' ? 15 : 15);
        const toX = to.x + (to.type === 'start' ? 10 : to.type === 'decision' ? 25 : 60);
        const toY = to.y + (to.type === 'start' ? 10 : to.type === 'decision' ? 15 : 15);
        
        // Simple straight line for now, could be enhanced with curves
        return `M ${fromX} ${fromY} L ${toX} ${toY}`;
    }
    
    renderActivities() {
        const activitiesGroup = document.getElementById('activities');
        
        this.data.swimlanes.forEach(lane => {
            lane.activities.forEach(activity => {
                const group = this.createActivityElement(activity);
                activitiesGroup.appendChild(group);
            });
        });
    }
    
    createActivityElement(activity) {
        const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        group.setAttribute('class', activity.type);
        group.setAttribute('data-activity-id', activity.id);
        
        if (activity.type === 'start') {
            this.createStartNode(group, activity);
        } else if (activity.type === 'decision') {
            this.createDecisionNode(group, activity);
        } else {
            this.createActivityNode(group, activity);
        }
        
        return group;
    }
    
    createStartNode(group, activity) {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('class', 'start-circle');
        circle.setAttribute('cx', activity.x + 10);
        circle.setAttribute('cy', activity.y + 10);
        circle.setAttribute('r', 10);
        group.appendChild(circle);
    }
    
    createDecisionNode(group, activity) {
        const diamond = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        const cx = activity.x + 25;
        const cy = activity.y + 15;
        const size = 25;
        const points = `${cx},${cy - size} ${cx + size},${cy} ${cx},${cy + size} ${cx - size},${cy}`;
        
        diamond.setAttribute('class', 'decision-diamond');
        diamond.setAttribute('points', points);
        group.appendChild(diamond);
        
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('class', 'decision-text');
        text.setAttribute('x', cx);
        text.setAttribute('y', cy);
        text.textContent = this.wrapText(activity.label, 12);
        group.appendChild(text);
    }
    
    createActivityNode(group, activity) {
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('class', 'activity-rect');
        rect.setAttribute('x', activity.x);
        rect.setAttribute('y', activity.y);
        rect.setAttribute('width', 120);
        rect.setAttribute('height', 30);
        group.appendChild(rect);
        
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('class', 'activity-text');
        text.setAttribute('x', activity.x + 60);
        text.setAttribute('y', activity.y + 15);
        text.textContent = this.wrapText(activity.label, 16);
        group.appendChild(text);
    }
    
    wrapText(text, maxLength) {
        if (text.length <= maxLength) return text;
        const words = text.split(' ');
        let line = '';
        for (const word of words) {
            if ((line + word).length > maxLength) break;
            line += (line ? ' ' : '') + word;
        }
        return line + (line !== text ? '...' : '');
    }
    
    setupInteractions() {
        // Wait for DOM to be fully ready
        setTimeout(() => {
            const activities = this.svg.querySelectorAll('[data-activity-id]');
            
            activities.forEach(activity => {
                // Ensure we have the activity ID
                const activityId = activity.getAttribute('data-activity-id');
                if (!activityId) return;
                
                // Add event listeners to the group element
                activity.addEventListener('mouseenter', (e) => this.showTooltip(e));
                activity.addEventListener('mouseleave', () => this.hideTooltip());
                activity.addEventListener('mousemove', (e) => this.moveTooltip(e));
                
                // Also add to child elements for better hover detection
                const children = activity.children;
                for (let child of children) {
                    child.addEventListener('mouseenter', (e) => {
                        e.stopPropagation();
                        this.showTooltip(e, activityId);
                    });
                    child.addEventListener('mouseleave', () => this.hideTooltip());
                    child.addEventListener('mousemove', (e) => this.moveTooltip(e));
                }
            });
        }, 100);
    }
    
    showTooltip(event, activityId = null) {
        const id = activityId || event.currentTarget.getAttribute('data-activity-id');
        const details = this.activityDetails[id];
        
        if (!details) return;
        
        document.getElementById('tooltip-title').textContent = details.title;
        document.getElementById('tooltip-description').textContent = details.description;
        document.getElementById('tooltip-lane').textContent = details.lane;
        
        this.tooltip.classList.remove('hidden');
        this.moveTooltip(event);
    }
    
    moveTooltip(event) {
        if (this.tooltip.classList.contains('hidden')) return;
        
        const tooltipWidth = this.tooltip.offsetWidth;
        const tooltipHeight = this.tooltip.offsetHeight;
        const margin = 10;
        
        let left = event.clientX + margin;
        let top = event.clientY + margin;
        
        // Adjust if tooltip goes off screen
        if (left + tooltipWidth > window.innerWidth) {
            left = event.clientX - tooltipWidth - margin;
        }
        
        if (top + tooltipHeight > window.innerHeight) {
            top = event.clientY - tooltipHeight - margin;
        }
        
        this.tooltip.style.left = left + 'px';
        this.tooltip.style.top = top + 'px';
    }
    
    hideTooltip() {
        this.tooltip.classList.add('hidden');
    }
}

// Initialize the diagram when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ActivityDiagram();
});
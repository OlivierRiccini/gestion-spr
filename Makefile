.PHONY: install build dev deploy deploy-prod setup ship convert-logo

install:
	yarn install

build:
	yarn build

dev:
	yarn dev

# Deploy to preview
deploy:
	vercel

# Deploy to production
deploy-prod:
	vercel --prod

# First time setup (install vercel, login, and deploy)
setup:
	yarn global add vercel
	# vercel login
	vercel link --project lexchain-ai-website
	-vercel env rm RESEND_API_KEY --yes
	vercel env add RESEND_API_KEY development
	vercel env add RESEND_API_KEY preview
	vercel env add RESEND_API_KEY production
	vercel env pull --yes
	make deploy

# All-in-one command for production deployment
ship: install build deploy-prod 
